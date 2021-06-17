import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtrarUsuario'
})
export class FiltrarUsuarioPipe implements PipeTransform {

  transform(value: any, ...arg: any): any {
    const resultPost= [];

    for(const user of value){
      if(user.email.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultPost.push(user);
      }else{
        if(user.nombre.toLowerCase().indexOf(arg.toLowerCase()) > -1){
          resultPost.push(user);
        }
      }
    }
    return resultPost
  }            
}
