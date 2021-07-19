import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calificacion'
})
export class CalificacionPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    
    if(value){
      if (value>=4&&value<=6) {
        return "Aprobado";
      }
      if(value<4){
        return "Desaprobado";
      }
      if (value>=6&&value<=10) {
        return "Promocionado";
      }
    }else{
      return "";
    }
  }

}
