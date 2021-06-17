import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Materia } from 'src/app/clases/materia';
import { Usuario } from 'src/app/clases/usuario';
import { MateriasService } from "../../services/materias.service";

@Component({
  selector: 'app-listar-materias',
  templateUrl: './listar-materias.component.html',
  styleUrls: ['./listar-materias.component.css']
})
export class ListarMateriasComponent implements OnInit {

  @Output()
  enviarMateria:EventEmitter<any> =new EventEmitter<any>();

  @Input()
  arrayIdAlumnos!:Usuario[];

  arrayMaterias:Materia[]=[];

  constructor(private materiaService:MateriasService) { 
    this.materiaService.materias.subscribe(res=>{
      this.arrayMaterias = [];
      res.map(a=>{        
        this.arrayMaterias.push(a);
      })
    })
  }

  ngOnInit(): void {
  }

  materiaSeleccionada(materia:Materia){
    this.enviarMateria.emit(materia);
  }
}
