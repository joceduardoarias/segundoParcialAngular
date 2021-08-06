import { Component, OnInit } from '@angular/core';
import { Examen } from 'src/app/clases/examen';
import { Materia } from 'src/app/clases/materia';
import { Usuario } from 'src/app/clases/usuario';
import { ExamenesService } from "../../services/examenes.service";
@Component({
  selector: 'app-listar-examnes',
  templateUrl: './listar-examnes.component.html',
  styleUrls: ['./listar-examnes.component.css']
})
export class ListarExamnesComponent implements OnInit {

  arrayExamenes:Examen[]=[];
  profesor:any;
  arrayAlumnos:Usuario[]=[];

  constructor( private examenService:ExamenesService) { 
    this.profesor = localStorage.getItem("usuario");
    this.examenService.examenes.subscribe(res=>{
      this.arrayExamenes = [];
      res.map(a=>{
        if (a.profesor.email == this.profesor) {
          this.arrayExamenes.push(a);
        }
      });
    });
  }

  ngOnInit(): void {
  }

  materiaSeleccionada(materia:Materia){
    for (var examen of this.arrayExamenes) {
      if (examen.materia.id == materia.id) {
        this.arrayAlumnos = examen.alumno;
      }
    }
   console.log(this.arrayAlumnos);
   
  }
}
