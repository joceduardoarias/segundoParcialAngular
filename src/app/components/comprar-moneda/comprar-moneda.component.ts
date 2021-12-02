import { Component, OnInit } from '@angular/core';
import { CriptoMoneda } from 'src/app/clases/cripto-moneda';
import { Usuario } from 'src/app/clases/usuario';
import { UsuariosService } from "../../services/usuarios.service";
import { CriptoService } from "../../services/cripto.service";
import Swal from 'sweetalert2';
import { MonedaCompra } from 'src/app/clases/moneda-compra';

@Component({
  selector: 'app-comprar-moneda',
  templateUrl: './comprar-moneda.component.html',
  styleUrls: ['./comprar-moneda.component.css']
})
export class ComprarMonedaComponent implements OnInit {

  vendedoresList:Usuario[] = [];
  monedasList:CriptoMoneda[]=[];
  monedasVendedorList:CriptoMoneda[]=[];
  cantidad:number;
  moneda:CriptoMoneda;
  compradoresList:Usuario[]=[];
  usuario:Usuario;
  email:string;
  monedaCompra:MonedaCompra;
  
  constructor(private usuariosService:UsuariosService,private criptoService:CriptoService) { }

  ngOnInit(): void {
    this.getVendedores();
    this.getMonedas();
    this.usuarioLogeado();
  }
  usuarioLogeado(){
    this.email = localStorage.getItem("usuario");
    this.usuariosService.usuarios.subscribe((data)=>{
      this.compradoresList = data;
      for (var usuario of this.compradoresList) {
        if (usuario.email == this.email && usuario.tipo == "comprador") {
          this.usuario = usuario;
        }
      }
    })
    
  }
  getVendedores(){
    this.usuariosService.usuarios.subscribe(res=>{
      this.vendedoresList = [];
      res.map(a=>{
        if (a.tipo=="vendedor" && a.habilitado) {
          this.vendedoresList.push(a);  
        }
      });
    });
    
  }
  getMonedas(){
    this.criptoService.CriptoMonedas.subscribe((data)=>{
      this.monedasList = data;
  })
  }
  verMonedas(vendedor:Usuario){
    this.monedasVendedorList = [];
    for (var moneda of this.monedasList) {
      if(vendedor.criptos.includes(moneda.id)==true){
        this.monedasVendedorList.push(moneda);
      }
    }
  }

  selecionaMoneda(moneda:CriptoMoneda){
    this.moneda = moneda;
    console.log(this.moneda);
     Swal.fire({
        icon: 'success',
        title: 'Moneda...',
        text: 'Moneda: '+this.moneda.nombre,
      })
    
  }
  comprar(){
    if (this.cantidad <=100 ) {
      this.moneda.cantidad = this.cantidad;
      this.usuario.criptosCompra.push(this.moneda);
      console.log(this.usuario);
      this.usuariosService.updateMonedaCompra(this.usuario.id,this.usuario);
      Swal.fire({
        icon: 'success',
        title: 'Compra realizada...',
        text: 'Moneda: '+this.moneda.nombre+" Cantidad: "+this.cantidad,
      })
    }else{
      Swal.fire({
        icon: 'warning',
        title: 'Oops...',
        text: 'la cantidada a comprar debe ser no mayor a 100',
      })
    }
  }
}
