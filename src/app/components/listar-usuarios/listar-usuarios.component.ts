import { Component, OnInit, Output,EventEmitter} from '@angular/core';
import { Usuario } from 'src/app/clases/usuario';
import { UsuariosService } from "../../services/usuarios.service";

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.css']
})
export class ListarUsuariosComponent implements OnInit {

  arrayUsuarios:Usuario[]=[];
  filtro:string = "";

  constructor(private usuariosService:UsuariosService) {
    this.usuariosService.usuarios.subscribe(res=>{
      this.arrayUsuarios = [];
      res.map(a=>{
          this.arrayUsuarios.push(a);  
      })
    })
   }

  ngOnInit(): void {
  }
  
  filtrar(obj:any){
    var tipo = obj.target.value;
    this.filtro = tipo
    
  }    
}
