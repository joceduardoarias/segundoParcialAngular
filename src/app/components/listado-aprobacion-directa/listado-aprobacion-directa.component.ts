import { Component, Input, OnInit } from '@angular/core';
import { Examen } from 'src/app/clases/examen';
import { Materia } from 'src/app/clases/materia';
import { ExamenesService } from "../../services/examenes.service";

@Component({
  selector: 'app-listado-aprobacion-directa',
  templateUrl: './listado-aprobacion-directa.component.html',
  styleUrls: ['./listado-aprobacion-directa.component.css']
})
export class ListadoAprobacionDirectaComponent implements OnInit {

  @Input()
  materia:any;

  auxMateria:Materia;
  arrayExamenes:Examen[]=[];

  constructor(private examenService:ExamenesService) { 
    this.auxMateria = new Materia();
    
    this.examenService.examenes.subscribe(res=>{
      this.arrayExamenes = [];
      res.map(a=>{
        
          this.arrayExamenes.push(a);
      });
    });
  }

  ngOnInit(): void {
  }



}
