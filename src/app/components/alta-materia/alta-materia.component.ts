import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsuariosService } from "../../services/usuarios.service";
import { Usuario } from "../../clases/usuario";

@Component({
  selector: 'app-alta-materia',
  templateUrl: './alta-materia.component.html',
  styleUrls: ['./alta-materia.component.css']
})
export class AltaMateriaComponent implements OnInit {

  formMateria:FormGroup;
  arrProfesores:Usuario[]=[];

  constructor(private usuarioService:UsuariosService) { 
    
    this.formMateria = new FormGroup({
      nombre:  new FormControl('',Validators.required),
      cuatrimestre:  new FormControl('',[Validators.required,Validators.email]),
      cupo: new FormControl('',Validators.required),
      año: new FormControl('',Validators.required),
      profesor: new FormControl('-1',Validators.required)
    });
    this.getProfesores();
  }

  ngOnInit(): void {
  }

  altaMateria(){

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
}
