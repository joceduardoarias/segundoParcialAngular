import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActasDeExamenComponent } from '../components/actas-de-examen/actas-de-examen.component';
import { AltaExamenComponent } from '../components/alta-examen/alta-examen.component';
import { ExamenesComponent } from '../components/examenes/examenes.component';
import { ListarExamnesComponent } from '../components/listar-examnes/listar-examnes.component';
import { ProfesorHomeComponent } from '../components/profesor-home/profesor-home.component';
import { ProfesorMateriasComponent } from '../components/profesor-materias/profesor-materias.component';

const routes: Routes = [
  {path:'profesorHome',component:ProfesorHomeComponent},
  {path:'profesorMaterias',component:ProfesorMateriasComponent},
  {path:'altaExamen',component:AltaExamenComponent},
  {path:'examenes',component:ExamenesComponent},
  {path:'actasDeExamen',component:ActasDeExamenComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfesorRoutingModule { }
