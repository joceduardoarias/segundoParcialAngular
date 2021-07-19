import { Pipe, PipeTransform } from '@angular/core';
import { Usuario } from '../clases/usuario';

@Pipe({
  name: 'filtrarUsuario'
})
export class FiltrarUsuarioPipe implements PipeTransform {

  transform(value: Usuario[], ...arg: any): Usuario[] {

    if (value) {
      for (var usuario of value) {
        console.log(usuario);
        
        usuario.tipo = usuario.tipo.toUpperCase();        
        // usuario.nombre.toUpperCase();
        usuario.imagen = usuario.imagen
        usuario.email = usuario.email.toLowerCase();
      }
      
      return value;
    }else{
      console.log("El array que se le pasa al pipe esta vacío");
      return [];
    }
  }            
}
