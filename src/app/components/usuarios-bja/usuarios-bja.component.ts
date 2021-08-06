import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/clases/usuario';
import { UsuariosBajaService } from "../../services/usuarios-baja.service";
@Component({
  selector: 'app-usuarios-bja',
  templateUrl: './usuarios-bja.component.html',
  styleUrls: ['./usuarios-bja.component.css']
})
export class UsuariosBjaComponent implements OnInit {

  arrayAlumnos:Usuario[]=[];

  constructor(private usuariosBorrados:UsuariosBajaService) { 
    this.usuariosBorrados.usuarios.subscribe(res=>{
      res.map(a=>{
        if (a.tipo=="alumno") {
          this.arrayAlumnos.push(a);  
        }
      });
    });
  }

  ngOnInit(): void {
  }

}
