import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnoHomeComponent } from '../components/alumno-home/alumno-home.component';
import { AlumnoInscribirMateriaComponent } from '../components/alumno-inscribir-materia/alumno-inscribir-materia.component';
import { AlumnoMisMateriasComponent } from '../components/alumno-mis-materias/alumno-mis-materias.component';

const routes: Routes = [
  {path:'alumnoHome',component:AlumnoHomeComponent },
  {path:'isncribirMateria',component:AlumnoInscribirMateriaComponent},
  {path:'misMaterias',component:AlumnoMisMateriasComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlumnoRoutingModule { }
