import { Component, OnInit } from '@angular/core';
import { CriptoMoneda } from 'src/app/clases/cripto-moneda';
import { Usuario } from 'src/app/clases/usuario';
import { CriptoService } from "../../services/cripto.service";
import { UsuariosService } from "../../services/usuarios.service";

@Component({
  selector: 'app-monedas-compradas',
  templateUrl: './monedas-compradas.component.html',
  styleUrls: ['./monedas-compradas.component.css']
})
export class MonedasCompradasComponent implements OnInit {

  monedas:CriptoMoneda[]=[];
  monedasAux:CriptoMoneda[];
  email:string;
  compradoresList:Usuario[]=[];
  usuario:Usuario;

  constructor(private criptoService:CriptoService, private usuariosService:UsuariosService) { 
   
  }

  ngOnInit(): void {
    this.usuarioLogeado().then((a)=>{
      this.getMonedas();
    });
    
  }

  usuarioLogeado(){
   return new Promise((res, rej) => {
    
    
    this.usuariosService.usuarios.subscribe((data)=>{
      res(this.compradoresList = data)
      this.email = localStorage.getItem("usuario");
      for (var usuario of this.compradoresList) {
        if (usuario.email == this.email && usuario.tipo == "comprador") {
          this.usuario = usuario;
        }
      }
    });  
    })
    
    
  }

  getMonedas(){
    this.criptoService.CriptoMonedas.subscribe((data)=>{
      this.monedasAux = data;
      for (var userMoneda of this.usuario.criptosCompra) {
        for (var moneda of this.monedasAux) {
          if (userMoneda.id == moneda.id) {
            this.monedas.push(userMoneda);
          }
        }
      }
      
  })
  }
}
