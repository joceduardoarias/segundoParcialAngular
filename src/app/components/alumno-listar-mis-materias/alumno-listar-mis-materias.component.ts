import { Component, Input, OnInit } from '@angular/core';
import { MateriasService } from "../../services/materias.service";
import { Materia } from 'src/app/clases/materia';
import { UsuariosService } from "../../services/usuarios.service";
import { AuthService } from "../../services/auth.service";
import { Usuario } from 'src/app/clases/usuario';

@Component({
  selector: 'app-alumno-listar-mis-materias',
  templateUrl: './alumno-listar-mis-materias.component.html',
  styleUrls: ['./alumno-listar-mis-materias.component.css']
})
export class AlumnoListarMisMateriasComponent implements OnInit {

  usuarioLogueado:any = localStorage.getItem('usuario');
  arrayMisMaterias:Materia[]=[];  
  arrayMaterias:Materia[]=[];

  constructor(private usuarioService:UsuariosService, private auth:AuthService,private materiaService:MateriasService) { 
    this.materiaService.materias.subscribe(res=>{
      this.arrayMaterias = [];
      res.map(a=>{        
        this.arrayMaterias.push(a);
        
      })
    });
    this.usuarioService.usuarios.subscribe(res=>{
      res.map(a=>{
        if (a.tipo == "alumno") {
          console.log(a);
          this.usuarioLogueado = a;
        }
      })
    });    
  }

  ngOnInit(): void {
  }

  misMaterias(){
    for (var materia of this.arrayMaterias) {
      if (materia.inscriptos.includes(this.usuarioLogueado.id)) {
        this.arrayMisMaterias.push(materia);
      }
    }
  }

}
