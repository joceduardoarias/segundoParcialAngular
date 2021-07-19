import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/clases/usuario';
import { UsuariosService } from "../../services/usuarios.service";

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.css']
})
export class ListarUsuariosComponent implements OnInit {

  arrayUsuarios:Usuario[]=[];
  arrayAux:Usuario[]=[];
  verFiltrado:boolean=false;

  constructor(private usuariosService:UsuariosService) {
    this.usuariosService.usuarios.subscribe(res=>{
      res.map(a=>{
          this.arrayUsuarios.push(a);  
      })
    })
   }

  ngOnInit(): void {
  }
  
  filtrar(obj:any){
    var tipo = obj.target.value;
    
    if (tipo!="-1") {
      console.log(tipo);
      
      this.arrayAux = this.arrayUsuarios.filter(usuario=> usuario.tipo.toLowerCase() == tipo.toLowerCase());  
      this.verFiltrado = true;
    }else{
      this.verFiltrado = false;
      console.log(this.arrayUsuarios);
      
    }
    

  }
}
