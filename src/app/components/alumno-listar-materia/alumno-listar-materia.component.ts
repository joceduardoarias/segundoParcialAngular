import { Component, OnInit,EventEmitter,Output, Input } from '@angular/core';
import { Materia } from 'src/app/clases/materia';
import { Usuario } from 'src/app/clases/usuario';
import { MateriasService } from "../../services/materias.service";
import { AuthService } from "../../services/auth.service";
import { UsuariosService } from "../../services/usuarios.service";

@Component({
  selector: 'app-alumno-listar-materia',
  templateUrl: './alumno-listar-materia.component.html',
  styleUrls: ['./alumno-listar-materia.component.css']
})
export class AlumnoListarMateriaComponent implements OnInit {

  @Output()
  enviarMateria:EventEmitter<any> =new EventEmitter<any>();
  @Input()
   verMaterias:any;
  @Input()
  verMisMateriasLista:any;  

  arrayMaterias:Materia[]=[];
  arrayMisMaterias:Materia[]=[];

  constructor(private materiaService:MateriasService, private auth:AuthService, private usuarioService:UsuariosService ) { 
    this.materiaService.materias.subscribe(res=>{
      this.arrayMaterias = [];
      res.map(a=>{        
        this.arrayMaterias.push(a);
      });
    });

    this.verMisMaterias();
  }

  ngOnInit(): void {
  }

  materiaSeleccionada(materia:Materia){
    this.enviarMateria.emit(materia);
  }

  async verMisMaterias(){

    var user = await this.auth.getCurrentUser();
    var dataUser : any = await this.usuarioService.getByEmail(user?.email);
    
    this.usuarioService.usuarios.subscribe(res=>{
      res.map(usuario=>{
        //verifico mi usuario
        if (usuario.email==dataUser.email) {
          //busco en cual materia esta inscrito
          for (var materia of this.arrayMaterias) {
            if (materia.inscriptos.includes(usuario.id)) {
              this.arrayMisMaterias.push(materia);
            }
          }
        }
      });
    });
  
  }  
}
