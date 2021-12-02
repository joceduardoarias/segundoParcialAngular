import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calificacion'
})
export class CalificacionPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    
    if(value){
      if (value>=10&&value<=20) {
        return "Buena comisión";
      }
      if(value<10){
        return "Baja comisión";
      }
      if (value>20) {
        return "Mucha comisión";
      }
    }else{
      return "";
    }
  }

}
