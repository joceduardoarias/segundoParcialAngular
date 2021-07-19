import { Component, OnInit } from '@angular/core';
import { UsuariosService } from "../../services/usuarios.service";
import { AuthService } from "../../services/auth.service";
import { Usuario } from 'src/app/clases/usuario';

@Component({
  selector: 'app-alumno-mis-materias',
  templateUrl: './alumno-mis-materias.component.html',
  styleUrls: ['./alumno-mis-materias.component.css']
})
export class AlumnoMisMateriasComponent implements OnInit {

  verTodas!:boolean;

  constructor(private usuarioService:UsuariosService, private auth:AuthService) {
    this.verTodas = false;
   }

  ngOnInit(): void {
  }



}
