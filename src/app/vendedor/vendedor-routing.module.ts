import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MonedasAsignadasComponent } from '../components/monedas-asignadas/monedas-asignadas.component';
import { SelecionarMonedaComponent } from '../components/selecionar-moneda/selecionar-moneda.component';
import { VendedorHomeComponent } from '../components/vendedor-home/vendedor-home.component';
const routes: Routes = [
  {path:"vendedorHome",component:VendedorHomeComponent,data: {animation: 'Cartilla'}},
  {path:"seleccionarMoneda",component:SelecionarMonedaComponent,data: {animation: 'Cartilla'}},
  {path:"monedasAsignadas",component:MonedasAsignadasComponent,data: {animation: 'Cartilla'}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendedorRoutingModule { }
