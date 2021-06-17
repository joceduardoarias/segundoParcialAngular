import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import { Usuario } from "../../clases/usuario";
import { UsuariosService } from "../../services/usuarios.service";

@Component({
  selector: 'app-listar-profesores',
  templateUrl: './listar-profesores.component.html',
  styleUrls: ['./listar-profesores.component.css']
})
export class ListarProfesoresComponent implements OnInit {

  @Output()
  enviarProfesor:EventEmitter<any> = new EventEmitter<any>();

  arrProfesores:Usuario[]=[];

  constructor(private usuarioService:UsuariosService) { 
    this.getProfesores();
  }

  ngOnInit(): void {
  }

  getProfesores(){
    this.usuarioService.usuarios.subscribe(res=>{
      res.map(a=>{
        if (a.tipo=="profesor") {
          this.arrProfesores.push(a);  
        }
      });
    });
  }

  profesorSeleccionado(profesor:any){
    this.enviarProfesor.emit(profesor);
  }
}
