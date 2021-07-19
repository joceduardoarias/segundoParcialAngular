import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfesorHomeComponent } from '../components/profesor-home/profesor-home.component';
import { ProfesorMateriasComponent } from '../components/profesor-materias/profesor-materias.component';

const routes: Routes = [
  {path:'profesorHome',component:ProfesorHomeComponent},
  {path:'profesorMaterias',component:ProfesorMateriasComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfesorRoutingModule { }
