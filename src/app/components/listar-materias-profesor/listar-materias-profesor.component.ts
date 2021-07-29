import { Component, OnInit } from '@angular/core';
import { MateriasService } from "../../services/materias.service";
import { UsuariosService } from "../../services/usuarios.service";
import { Materia } from 'src/app/clases/materia';
import { Usuario } from 'src/app/clases/usuario';

@Component({
  selector: 'app-listar-materias-profesor',
  templateUrl: './listar-materias-profesor.component.html',
  styleUrls: ['./listar-materias-profesor.component.css']
})
export class ListarMateriasProfesorComponent implements OnInit {

  arrayMaterias:Materia[]=[];
  arrayAlumnoMateria:Usuario[]=[];
  arrayAlumnos:Usuario[]=[];
  profesor:any;

  constructor(private materiaService:MateriasService, private usuarioService:UsuariosService) { 
    
    this.profesor = localStorage.getItem("usuario");
    this.materiaService.materias.subscribe(res=>{
      this.arrayMaterias = [];
      res.map(a=>{
        if(a.profesor == this.profesor)        {
          this.arrayMaterias.push(a);
        }        
      });
    });

    this.usuarioService.usuarios.subscribe(res=>{
      this.arrayAlumnos = [];
      res.map(a=>{
              if(a.tipo == "alumno"){
                this.arrayAlumnos.push(a);
              }
      });
    });
  }

  ngOnInit(): void {
  }
  materiaSeleccionada(materia:Materia){
    
    console.log(materia);
    console.log(this.arrayAlumnos);
    for (var a of this.arrayAlumnos) {
      for (var m of materia.inscriptos) {
        if(a.id == m){
          this.arrayAlumnoMateria.push(a);
        }
      }
    }
  }
}
