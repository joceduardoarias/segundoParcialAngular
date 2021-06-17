import { Component, OnInit } from '@angular/core';
import { UsuariosService } from "../../services/usuarios.service";
import { Usuario } from "../../clases/usuario";
@Component({
  selector: 'app-ver-materias-admin',
  templateUrl: './ver-materias-admin.component.html',
  styleUrls: ['./ver-materias-admin.component.css']
})
export class VerMateriasAdminComponent implements OnInit {

  alumnos!:string[];
  alumnosAux!:Usuario[];
  alumnosFinal!:Usuario[];
  constructor(private usuarioService:UsuariosService) { 
    
    this.alumnos =[];
    this.alumnosAux =[];
    this.alumnosFinal =[];

    this.usuarioService.usuarios.subscribe(res=>{
      res.map(a=>{
        if (a.tipo=="alumno") {
          this.alumnosAux.push(a);
          console.log("hay alumnos: ",a.email);
        }
      })
    })
  }

  ngOnInit(): void {
  }

  procesarMateria($event:any){
    this.alumnos=$event.inscriptos; 
    for (var alumno of this.alumnos) {
      console.log(alumno);
      for (var alumnoAux of this.alumnosAux) {
        if (alumnoAux.id==alumno) {
          this.alumnosFinal.push(alumnoAux);
        }
      }
    } 
  }
}
