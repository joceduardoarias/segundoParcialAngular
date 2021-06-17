import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsuariosService } from "../../services/usuarios.service";
import { MateriasService } from "../../services/materias.service";
import { Materia } from 'src/app/clases/materia';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-alta-materia',
  templateUrl: './alta-materia.component.html',
  styleUrls: ['./alta-materia.component.css']
})
export class AltaMateriaComponent implements OnInit {
  
  formMateria:FormGroup;
  nuevaMateria: Materia = new Materia();
  // arrProfesores:Usuario[]=[];

  constructor(private usuarioService:UsuariosService,private materiaService:MateriasService) { 
    
    this.formMateria = new FormGroup({
      nombre:  new FormControl('',Validators.required),
      cuatrimestre:  new FormControl('',Validators.required),
      cupo: new FormControl('',Validators.required),
      año: new FormControl('',Validators.required),
    });
  }

  ngOnInit(): void {
  }

  altaMateria(){
    
    if (this.formMateria.status=="VALID") {
      
      if(this.nuevaMateria.profesor != "-1" && this.nuevaMateria.profesor != undefined){

        this.nuevaMateria.nombre = this.formMateria.get('nombre')?.value;
        this.nuevaMateria.cuatrimestre = this.formMateria.get('cuatrimestre')?.value;
        this.nuevaMateria.año = this.formMateria.get('año')?.value;
        this.nuevaMateria.cupo = this.formMateria.get('cupo')?.value;
        //se agraga a la colección
        this.materiaService.create(this.nuevaMateria)
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Marteria guardada',
          showConfirmButton: false,
          timer: 1500
        });
      }else{
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Seleccione un profesor!',
          showConfirmButton: false,
          timer: 1500
        });
      }
      
    }else{
      //alerte de faltan datos por cargar
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Todos los campos deben estar cargados!',
        showConfirmButton: false,
        timer: 1500
      });
    }

  }

  procesarProfesor($event:any){
    // this.formMateria.setValue({profesor:$event.email});
    this.nuevaMateria.profesor = $event.email;
  }
}
