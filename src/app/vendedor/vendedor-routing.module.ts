import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MonedasAsignadasComponent } from '../components/monedas-asignadas/monedas-asignadas.component';
import { SelecionarMonedaComponent } from '../components/selecionar-moneda/selecionar-moneda.component';
import { VendedorHomeComponent } from '../components/vendedor-home/vendedor-home.component';
const routes: Routes = [
  {path:"vendedorHome",component:VendedorHomeComponent},
  {path:"seleccionarMoneda",component:SelecionarMonedaComponent},
  {path:"monedasAsignadas",component:MonedasAsignadasComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendedorRoutingModule { }
