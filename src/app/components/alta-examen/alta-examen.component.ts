import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Examen } from 'src/app/clases/examen';
import { Materia } from 'src/app/clases/materia';
import { Usuario } from 'src/app/clases/usuario';
import Swal from 'sweetalert2';
import { ExamenesService } from "../../services/examenes.service";
@Component({
  selector: 'app-alta-examen',
  templateUrl: './alta-examen.component.html',
  styleUrls: ['./alta-examen.component.css']
})
export class AltaExamenComponent implements OnInit {

  formExamen:FormGroup;
  alumno:Usuario;
  materia:Materia;
  examen:Examen;
  profesor:Usuario;
  arrayExamenes:Examen[]=[];
  constructor(private router:Router, private examenService:ExamenesService) { 
    this.profesor = new Usuario();
    this.alumno = new Usuario();
    this.materia = new Materia();
    this.examen = new Examen();

    this.formExamen = new FormGroup({
      nota:  new FormControl('',Validators.required),
      fecha: new FormControl('',Validators.required),
    });
    this.examenService.examenes.subscribe(res=>{
      this.arrayExamenes = [];
      res.map(a=>{
        
          this.arrayExamenes.push(a);
      });
    });
  }

  ngOnInit(): void {
  }

  altaExamen(){
    if (this.alumno.email != null && this.materia.nombre != null && this.profesor.nombre!=null) {

      if (this.formExamen.status == "VALID") {

        
        this.examen.materia = this.materia;
        this.examen.profesor = this.profesor;
        this.examen.fecha = this.formExamen.get('fecha')?.value;
        this.alumno.nota  =  this.formExamen.get('nota')?.value;
        
        if (this.arrayExamenes.length>0) {
          for (var examen of this.arrayExamenes) {
            if (examen.materia.id == this.materia.id) {
              examen.alumno.push(this.alumno);
              this.examenService.update(examen.id,examen);
              break;
            }else{
              this.examen.alumno = [];
              this.examen.alumno.push(this.alumno);
              this.examenService.create(this.examen);
              break;
            }
          }
        }else{
          this.examen.alumno = [];
          this.examen.alumno.push(this.alumno);
          this.examenService.create(this.examen);
        }
        
        
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Exámen cargado correctamente!',
          showConfirmButton: false,
          timer: 1500
        });
        this.router.navigateByUrl("profesor/profesorHome");
      }else{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Debe completar todos los campos!',
        });
      }
      
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Debe completar todos los campos!',
      });
    }
  }

  procesarAlumno(event:any){
    this.alumno = event;
  }
  procesarMateria(event:any){
    this.materia = event;
  }
  procesarProfesor(event:any){
    this.profesor = event;
  }
}
