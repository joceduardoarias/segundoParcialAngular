import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Usuario } from "../../clases/usuario";
import { UsuariosService } from "../../services/usuarios.service";

@Component({
  selector: 'app-listar-alumnos',
  templateUrl: './listar-alumnos.component.html',
  styleUrls: ['./listar-alumnos.component.css']
})
export class ListarAlumnosComponent implements OnInit {

  @Output()
  enviarAlumno:EventEmitter<any>  =new EventEmitter<any>();

  arrayAlumnos:Usuario[]=[];

  constructor(private usuariosService:UsuariosService) {
    this.usuariosService.usuarios.subscribe(res=>{
      res.map(a=>{
        if (a.tipo=="alumno") {
          this.arrayAlumnos.push(a);  
        }
      });
    });
   }

  ngOnInit(): void {
  }

  alumnoSeleccionada(alumno:Usuario){
    this.enviarAlumno.emit(alumno);
  }
}
