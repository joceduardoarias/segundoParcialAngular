import { Component, OnInit,EventEmitter,Output, Input } from '@angular/core';
import { Materia } from 'src/app/clases/materia';
import { Usuario } from 'src/app/clases/usuario';
import { MateriasService } from "../../services/materias.service";

@Component({
  selector: 'app-alumno-listar-materia',
  templateUrl: './alumno-listar-materia.component.html',
  styleUrls: ['./alumno-listar-materia.component.css']
})
export class AlumnoListarMateriaComponent implements OnInit {

  @Output()
  enviarMateria:EventEmitter<any> =new EventEmitter<any>();
  
  @Input()
  usuario!:Usuario;
  arrayMaterias:Materia[]=[];
  arrayMisMaterias:Materia[]=[];
  misMateriasFlag:boolean = false;

  constructor(private materiaService:MateriasService) { 
    this.materiaService.materias.subscribe(res=>{
      this.arrayMaterias = [];
      res.map(a=>{        
        this.arrayMaterias.push(a);
      })
    });
    console.log(this.usuario);
    // this.misMaterias();
    
    
  }

  ngOnInit(): void {
  }

  materiaSeleccionada(materia:Materia){
    this.enviarMateria.emit(materia);
  }

  misMaterias(){
    for (var materia of this.arrayMaterias) {
      if (materia.inscriptos.includes(this.usuario.id)) {
        this.arrayMisMaterias.push(materia);
      }
    }
  }

}
