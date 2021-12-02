import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompradorHomeComponent } from '../components/comprador-home/comprador-home.component';
import { ComprarMonedaComponent } from '../components/comprar-moneda/comprar-moneda.component';
import { MonedasCompradasComponent } from '../components/monedas-compradas/monedas-compradas.component';


const routes: Routes = [
  {path:"compradorHome",component:CompradorHomeComponent},
  {path:"comprarMoneda",component:ComprarMonedaComponent},
  {path:"monedasCompradas",component:MonedasCompradasComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompradorRoutingModule { }
