import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import { Usuario } from "../../clases/usuario";
import { UsuariosService } from "../../services/usuarios.service";

@Component({
  selector: 'app-select-alumno',
  templateUrl: './select-alumno.component.html',
  styleUrls: ['./select-alumno.component.css']
})
export class SelectAlumnoComponent implements OnInit {
  @Output()
  enviarAlumno:EventEmitter<any> = new EventEmitter<any>();
  arrAlumno:Usuario[]=[];

  constructor(private usuarioService:UsuariosService) { 
    this.getAlumno();
  }

  ngOnInit(): void {
  }
  
  getAlumno(){
    this.usuarioService.usuarios.subscribe(res=>{
      res.map(a=>{
        if (a.tipo=="alumno") {
          this.arrAlumno.push(a);  
        }
      });
    });
  }

  alumnoSeleccionado(profesor:any){
    this.enviarAlumno.emit(profesor);
  }
}
