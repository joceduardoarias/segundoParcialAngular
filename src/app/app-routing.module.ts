import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrarComponent } from './components/registrar/registrar.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'login/registrar',component:RegistrarComponent},
  {path:'home',component:HomeComponent},  
  {path:'',redirectTo:'login',pathMatch:'full'},
  { path: 'administrador', loadChildren: () => import('./administrador/administrador.module').then(m => m.AdministradorModule) },
  { path: 'alumno', loadChildren: () => import('./alumno/alumno.module').then(m => m.AlumnoModule) },
  { path: 'profesor', loadChildren: () => import('./profesor/profesor.module').then(m => m.ProfesorModule) },
  { path: 'vendedor', loadChildren: () => import('./vendedor/vendedor.module').then(m => m.VendedorModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
