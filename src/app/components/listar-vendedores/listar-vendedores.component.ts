import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/clases/usuario';
import { UsuariosService } from "../../services/usuarios.service";
@Component({
  selector: 'app-listar-vendedores',
  templateUrl: './listar-vendedores.component.html',
  styleUrls: ['./listar-vendedores.component.css']
})
export class ListarVendedoresComponent implements OnInit {
  
  vendedoresList:Usuario[] = [];

  constructor(private usuariosService:UsuariosService) { }

  ngOnInit(): void {
    this.getVendedores();
  }

  getVendedores(){
    this.usuariosService.usuarios.subscribe(res=>{
      this.vendedoresList = [];
      res.map(a=>{
        if (a.tipo=="vendedor") {
          this.vendedoresList.push(a);  
          console.log(a);
          
        }
      });
    });
    
  }

  habilitarDeshabilitar(vendedor:Usuario, estado:boolean){
    vendedor.habilitado = estado;
    this.usuariosService.update(vendedor.id,vendedor);
    
  }
}
