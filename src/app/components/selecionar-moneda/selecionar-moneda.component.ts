import { Component, OnInit } from '@angular/core';
import { CriptoMoneda } from 'src/app/clases/cripto-moneda';
import { UsuariosService } from "../../services/usuarios.service";
import { AuthService } from "../../services/auth.service";
import { Usuario } from 'src/app/clases/usuario';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-selecionar-moneda',
  templateUrl: './selecionar-moneda.component.html',
  styleUrls: ['./selecionar-moneda.component.css']
})
export class SelecionarMonedaComponent implements OnInit {

  mondeda: CriptoMoneda;
  email:string;
  usuarios:Usuario[];

  constructor(private usuarioService:UsuariosService, private auth:AuthService) { }

  ngOnInit(): void {
    this.usuarioService.usuarios.subscribe((data)=>{
      this.usuarios = data;
    });
  }

  procesarMoneda($event){
    this.mondeda = $event;
    this.asignarVendedor();
  }

  asignarVendedor(){
    
    this.email = localStorage.getItem("usuario");
    
     for (var usuario of this.usuarios) {
      if ( usuario.email == this.email && usuario.habilitado) {
        
        if (usuario.criptos.includes(this.mondeda.id)==false) {
         usuario.criptos.push(this.mondeda.id);
         console.log(usuario.id); 
         this.usuarioService.updateMoneda(usuario.id,usuario);
        Swal.fire({
          icon: 'success',
          title: 'Asignar moneda',
          text: 'Moneda asignada',
        });
     }else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Esta moneda ya fue asignada',
      })
     } 
      
        
        
       }
        
      }
   
    
  }
}
