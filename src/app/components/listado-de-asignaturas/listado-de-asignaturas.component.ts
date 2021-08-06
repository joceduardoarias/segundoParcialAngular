import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { map } from 'rxjs/operators';
import { Materia } from 'src/app/clases/materia';
import { MateriasService } from "../../services/materias.service";
@Component({
  selector: 'app-listado-de-asignaturas',
  templateUrl: './listado-de-asignaturas.component.html',
  styleUrls: ['./listado-de-asignaturas.component.css']
})
export class ListadoDeAsignaturasComponent implements OnInit {

  @Input()
  profesorHijo:any;

  @Output()
  materia:EventEmitter<any> =new EventEmitter<any>();

  arrayMaterias:Materia[] = [];

  constructor(private materiasService:MateriasService) {
    this.materiasService.materias.subscribe(res=>{
      this.arrayMaterias = [];
      res.map(a=>{
        this,this.arrayMaterias.push(a);
      });
    });
   }

  ngOnInit(): void {
  }

  materiaSeleccionada(materia:Materia){
    this.materia.emit(materia);
  }
}
