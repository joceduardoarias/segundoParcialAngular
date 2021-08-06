import { Pipe, PipeTransform } from '@angular/core';
import { Usuario } from '../clases/usuario';

@Pipe({
  name: 'noAprobados'
})
export class NoAprobadosPipe implements PipeTransform {
  
  auxArray: Usuario[]=[];

  transform(value: any[], ...args: any[]): any {
    if (value) {
      
      for (var alumno of value) {
        if (+alumno.nota < 7) {
          this.auxArray.push(alumno);
        }
      }
    }
    return this.auxArray;
  }

}
