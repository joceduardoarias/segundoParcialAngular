import { Component, OnInit } from '@angular/core';
import { Materia } from 'src/app/clases/materia';
import { UsuariosService } from "../../services/usuarios.service";
import { AuthService } from "../../services/auth.service";
import { Usuario } from 'src/app/clases/usuario';
import Swal from 'sweetalert2';
import { MateriasService } from "../../services/materias.service";

@Component({
  selector: 'app-alumno-inscribir-materia',
  templateUrl: './alumno-inscribir-materia.component.html',
  styleUrls: ['./alumno-inscribir-materia.component.css']
})
export class AlumnoInscribirMateriaComponent implements OnInit {

  materia!:Materia;
  alumno!:Usuario;

  constructor(private usuarioService:UsuariosService, private auth:AuthService,private materiaServicio:MateriasService) { 
    this.checkearUsuario()
  }

  ngOnInit(): void {
  }

  procesarMateria($event:Materia){
    this.materia = $event;
  }

  async checkearUsuario(){
    var user = await this.auth.getCurrentUser();
    var dataUser : any = await this.usuarioService.getByEmail(user?.email);

    if (dataUser.email == user?.email) {
      this.alumno = dataUser;
    }
  }

  iniciaInscripcion(){
    
      Swal.fire({
        title: 'Esta seguro de asociar a '+this.alumno.email+' en la moneda '+this.materia.nombre,
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
                    Swal.fire('operacion exitosa!', '', 'success')
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
          Swal.fire('Se ha cancelado la inscripción', '', 'info')
        }
      })
    
    }

    inscribir(){
      var resultado = 0;
      
      if (this.materia.cupo > 0) {
        console.log("coso");
        
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
          this.materia.cupo--;
          this.materiaServicio.update(this.materia.id,this.materia);
          resultado = 1;
        }      
      }else{
        resultado = 3;
      }
      return resultado;
    }
}
