import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Materia } from "../../clases/materia";
import { MateriasService } from "../../services/materias.service";

@Component({
  selector: 'app-select-materia',
  templateUrl: './select-materia.component.html',
  styleUrls: ['./select-materia.component.css']
})
export class SelectMateriaComponent implements OnInit {

  @Output()
  enviarMateria:EventEmitter<any> = new EventEmitter<any>();
  arrMateria:Materia[]=[];

  constructor(private materiaService:MateriasService) { 
    this.getMateria();
  }

  ngOnInit(): void {
  }
  
  getMateria(){
    var profesor = localStorage.getItem('usuario');
    this.materiaService.materias.subscribe(res=>{
      res.map(a=>{
        if (a.profesor== profesor) {
          this.arrMateria.push(a);  
        }
      });
    });
  }

  materiaSeleccionado(materia:any){
    this.enviarMateria.emit(materia);
  }

}
