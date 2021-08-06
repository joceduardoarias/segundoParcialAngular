import { Component, OnInit } from '@angular/core';
import { Materia } from 'src/app/clases/materia';
import { Usuario } from 'src/app/clases/usuario';

@Component({
  selector: 'app-actas-de-examen',
  templateUrl: './actas-de-examen.component.html',
  styleUrls: ['./actas-de-examen.component.css']
})
export class ActasDeExamenComponent implements OnInit {

  profesor : Usuario;
  materia: Materia;
  constructor() { 
    this.profesor = new Usuario();
    this.materia = new Materia();
  }

  ngOnInit(): void {
  }

  procesarProfesor(profesor:Usuario){
    this.profesor = profesor;
  }

  procesarMateria(materia:Materia){
    this.materia = materia;
  }
}
