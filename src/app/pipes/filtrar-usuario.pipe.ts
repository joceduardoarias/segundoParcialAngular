import { Pipe, PipeTransform } from '@angular/core';
import { Usuario } from '../clases/usuario';

@Pipe({
  name: 'filtrarUsuario'
})
export class FiltrarUsuarioPipe implements PipeTransform {
  
  arrAux:Usuario[]=[];
  transform(value: Usuario[], arg: any): Usuario[] {

    console.log(arg);
    
    if (value) {
      for (var usuario of value) {
       if (usuario.tipo == arg) {
         this.arrAux.push(usuario);
       }
      }
      value = this.arrAux;
      this.arrAux = [];
      return value;
    }else{
      console.log("El array que se le pasa al pipe esta vacío");
      return [];
    }
  }            
}
