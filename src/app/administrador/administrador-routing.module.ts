import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from '../components/admin-home/admin-home.component';
import { AltaMateriaComponent } from '../components/alta-materia/alta-materia.component';
import { BajaUsuarioComponent } from '../components/baja-usuario/baja-usuario.component';
import { InscribirMateriaComponent } from '../components/inscribir-materia/inscribir-materia.component';
import { ListarMateriasComponent } from '../components/listar-materias/listar-materias.component';
import { ListarUsuariosComponent } from '../components/listar-usuarios/listar-usuarios.component';
import { RegistrarAdminComponent } from '../components/registrar-admin/registrar-admin.component';
import { UsuariosBjaComponent } from '../components/usuarios-bja/usuarios-bja.component';
import { VerMateriasAdminComponent } from '../components/ver-materias-admin/ver-materias-admin.component';
import { AdminGuard } from '../guards/admin.guard';

const routes: Routes = [
  {path:'adminHome',component:AdminHomeComponent,canActivate:[AdminGuard]},
  {path:'registrarAdmin',component:RegistrarAdminComponent},
  {path:'altaMateria',component:AltaMateriaComponent},
  {path:'listarMaterias',component:ListarMateriasComponent},
  {path:'inscribirMaterias',component:InscribirMateriaComponent},
  {path:'verMateriasAdmin',component:VerMateriasAdminComponent},
  {path:'listarUsuarios',component:ListarUsuariosComponent},
  {path:'bajaUsuario',component:BajaUsuarioComponent},
  {path:'usuariosBorrados', component:UsuariosBjaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministradorRoutingModule { }
