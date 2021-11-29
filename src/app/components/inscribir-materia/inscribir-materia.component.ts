import { Component, OnInit } from '@angular/core';
import { Materia } from 'src/app/clases/materia';
import { Usuario } from 'src/app/clases/usuario';
import Swal from 'sweetalert2';
import { MateriasService } from "../../services/materias.service";

@Component({
  selector: 'app-inscribir-materia',
  templateUrl: './inscribir-materia.component.html',
  styleUrls: ['./inscribir-materia.component.css']
})
export class InscribirMateriaComponent implements OnInit {

  materia!:Materia;
  alumno!:Usuario;
  alumnoHabilitado:boolean = false;
  materiaHabilitado:boolean = false;

  constructor(private materiaServicio:MateriasService) { }

  ngOnInit(): void {
  }



  procesarMateria($event:any){
    console.log("id: ",$event.id);
    console.log("materia: ",$event.nombre);
    console.log($event);
    
    this.materia = $event;
    this.materiaHabilitado = true;
  }

  procesarAlumno($event:any){
    console.log("id: ",$event.id);
    console.log("alumno: ",$event.email);
    this.alumno = $event;
    this.alumnoHabilitado = true;
  }

  inscribir(){
    var resultado = 0;
    
    if (this.materia.cupo > 0) {
      if (this.materia.inscriptos!=undefined) {
        if (this.materia.inscriptos.includes(this.alumno.id)==false) {
          this.materia.inscriptos.push(this.alumno.id);
          this.materia.cupo--;
          this.materiaServicio.update(this.materia.id,this.materia);
          resultado = 1;
        }else{
          resultado = 2;
        }
      }else{
        this.materia.inscriptos=[];
        this.materia.inscriptos.push(this.alumno.id);
        // this.materia.cupo--;
        console.log("bug");
        
        this.materiaServicio.update(this.materia.id,this.materia);
        resultado = 1;
      }      
    }else{
      resultado = 3;
    }
    return resultado;
  }

  iniciaInscripcion(){
    if (this.alumnoHabilitado&&this.materiaHabilitado) {
      Swal.fire({
        title: 'Esta seguro de inscribir a '+this.alumno.email+' en la materia '+this.materia.nombre,
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: `Aceptar`,
        denyButtonText: `Cancelar`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          
          switch (this.inscribir()) {
            case 0:
                    Swal.fire({
                      icon: 'error',
                      title: 'Oops...',
                      text: 'Hay un error en el sistema!',
                    });
            break;
            case 1:
                    Swal.fire('Inscrpción exitosa!', '', 'success')
            break;
            case 2:
                    Swal.fire({
                      icon: 'info',
                      title: 'Oops...',
                      text: 'Alumno ya esta inscrito en esta materia!',
                    });
            break;
            case 3:
                    Swal.fire({
                      icon: 'info',
                      title: 'Oops...',
                      text: 'No hay cupos disponibles para esta materia!',
                    });
            break;                
            default:
              break;
          }
                    
        } else if (result.isDenied) {
          this.alumnoHabilitado = false;
          this.materiaHabilitado = false;
          Swal.fire('Se ha cancelado la inscripción', '', 'info')
        }
      })
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Debe seleccionar una materia y un alumno!',
      });
    }
  }
}
