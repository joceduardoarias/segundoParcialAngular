import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CriptoMoneda } from 'src/app/clases/cripto-moneda';
import { Usuario } from 'src/app/clases/usuario';
import { CriptoService } from "../../services/cripto.service";
@Component({
  selector: 'app-listar-monedas',
  templateUrl: './listar-monedas.component.html',
  styleUrls: ['./listar-monedas.component.css']
})
export class ListarMonedasComponent implements OnInit {

  @Output()
  enviarMoneda:EventEmitter<any> =new EventEmitter<any>();
  @Input()
  vendedor:Usuario;

  vendedorModel:Usuario;
  monedas:CriptoMoneda[];

  constructor(private criptoService:CriptoService) {
    this.criptoService.CriptoMonedas.subscribe((data)=>{
      this.monedas = data;
  })
   }

  ngOnInit(): void {    
    console.log(this.vendedorModel);
    
  }

  monedaSeleccionada(moneda:CriptoMoneda){
    this.enviarMoneda.emit(moneda);
  }
}
