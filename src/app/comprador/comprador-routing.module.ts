import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompradorHomeComponent } from '../components/comprador-home/comprador-home.component';


const routes: Routes = [
  {path:"compradorHome",component:CompradorHomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompradorRoutingModule { }
