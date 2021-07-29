import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/clases/usuario';
import Swal from 'sweetalert2';
import { UsuariosService } from "../../services/usuarios.service";

@Component({
  selector: 'app-baja-usuario',
  templateUrl: './baja-usuario.component.html',
  styleUrls: ['./baja-usuario.component.css']
})
export class BajaUsuarioComponent implements OnInit {
  
  arrayAlumnos:Usuario[]=[];
  
  constructor(private usuarioService:UsuariosService) {
    this.usuarioService.usuarios.subscribe(res=>{
      this.arrayAlumnos = [];
      res.map(a=>{
        if (a.tipo=="alumno") {
          this.arrayAlumnos.push(a);  
          console.log(a);
          
        }
      });
    });
   }

  ngOnInit(): void {
  }

  alumnoSeleccionada(usuario:any){
    console.log( "dar de baja: ",usuario);
    Swal.fire({
      title: 'Estas seguro de eliminar a '+ usuario.nombre +'?',
      text: "Esta acción borrara todo registro del usuario!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, dar de baja!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.usuarioService.delete(usuario.id);
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }
}
