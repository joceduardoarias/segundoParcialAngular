import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/clases/usuario';
import { UsuariosService } from "../../services/usuarios.service";

@Component({
  selector: 'app-monedas-asignadas',
  templateUrl: './monedas-asignadas.component.html',
  styleUrls: ['./monedas-asignadas.component.css']
})
export class MonedasAsignadasComponent implements OnInit {

  usuarios:Usuario[];
  email:string;
  usuario:Usuario;
  constructor(private usuarioService:UsuariosService) { }

  ngOnInit(): void {
    this.usuarioService.usuarios.subscribe((data)=>{
      this.usuarios = data;
      this.usuarioLogueado();
    });
  }

  usuarioLogueado(){
    this.email = localStorage.getItem("usuario");
    for (var usuario of this.usuarios) {
      if (usuario.email == this.email) {
        console.log(this.email);
        this.usuario = usuario;
      }
    }
  }
}
