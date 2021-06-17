import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { AltaMateriaComponent } from './components/alta-materia/alta-materia.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrarAdminComponent } from './components/registrar-admin/registrar-admin.component';
import { RegistrarComponent } from './components/registrar/registrar.component';
import { AdminGuard } from './guards/admin.guard';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'adminHome',component:AdminHomeComponent,canActivate:[AdminGuard]},
  {path:'registrar',component:RegistrarComponent},
  {path:'registrarAdmin',component:RegistrarAdminComponent},
  {path:'altaMateria',component:AltaMateriaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
