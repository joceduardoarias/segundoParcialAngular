import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
//firebase configuración
import { AngularFireModule} from '@angular/fire';
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { environment } from 'src/environments/environment';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFireStorageModule } from "@angular/fire/storage";
//Componentes
import { HomeComponent } from './components/home/home.component';
import { BarraNavegacionComponent } from './components/barra-navegacion/barra-navegacion.component';
import { RegistrarComponent } from './components/registrar/registrar.component';
//spinner
import { NgxSpinnerModule } from "ngx-spinner";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//sweetAlert
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
//directivas
import { UsuarioLogueadoDirective } from './directivas/usuario-logueado.directive';
import { RegistrarAdminComponent } from './components/registrar-admin/registrar-admin.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { AltaMateriaComponent } from './components/alta-materia/alta-materia.component';
import { ListarProfesoresComponent } from './components/listar-profesores/listar-profesores.component';
import { InscribirMateriaComponent } from './components/inscribir-materia/inscribir-materia.component';
import { ListarMateriasComponent } from './components/listar-materias/listar-materias.component';
import { ListarAlumnosComponent } from './components/listar-alumnos/listar-alumnos.component';
import { VerMateriasAdminComponent } from './components/ver-materias-admin/ver-materias-admin.component';
import { ListarUsuariosComponent } from './components/listar-usuarios/listar-usuarios.component';
import { FiltrarUsuarioPipe } from './pipes/filtrar-usuario.pipe';
import { AlumnoHomeComponent } from './components/alumno-home/alumno-home.component';
import { AlumnoInscribirMateriaComponent } from './components/alumno-inscribir-materia/alumno-inscribir-materia.component';
import { AlumnoListarMateriaComponent } from './components/alumno-listar-materia/alumno-listar-materia.component';
import { AlumnoMisMateriasComponent } from './components/alumno-mis-materias/alumno-mis-materias.component';
import { ResaltarDirective } from './directivas/resaltar.directive';
import { ProfesorHomeComponent } from './components/profesor-home/profesor-home.component';
import { CalificacionPipe } from './pipes/calificacion.pipe';
import { ProfesorMateriasComponent } from './components/profesor-materias/profesor-materias.component';
import { ListarMateriasProfesorComponent } from './components/listar-materias-profesor/listar-materias-profesor.component';
import { BajaUsuarioComponent } from './components/baja-usuario/baja-usuario.component';
import { UsuariosBjaComponent } from './components/usuarios-bja/usuarios-bja.component';
import { AltaExamenComponent } from './components/alta-examen/alta-examen.component';
import { SelectAlumnoComponent } from './components/select-alumno/select-alumno.component';
import { SelectMateriaComponent } from './components/select-materia/select-materia.component';
import { ListarExamnesComponent } from './components/listar-examnes/listar-examnes.component';
import { ExamenesComponent } from './components/examenes/examenes.component';
import { ActasDeExamenComponent } from './components/actas-de-examen/actas-de-examen.component';
import { ListadoDeAsignaturasComponent } from './components/listado-de-asignaturas/listado-de-asignaturas.component';
import { ListadoAprobacionDirectaComponent } from './components/listado-aprobacion-directa/listado-aprobacion-directa.component';
import { ListadoNoDirectaComponent } from './components/listado-no-directa/listado-no-directa.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    BarraNavegacionComponent,
    RegistrarComponent,
    UsuarioLogueadoDirective,
    RegistrarAdminComponent,
    AdminHomeComponent,
    AltaMateriaComponent,
    ListarProfesoresComponent,
    InscribirMateriaComponent,
    ListarMateriasComponent,
    ListarAlumnosComponent,
    VerMateriasAdminComponent,
    ListarUsuariosComponent,
    FiltrarUsuarioPipe,
    AlumnoHomeComponent,
    AlumnoInscribirMateriaComponent,
    AlumnoListarMateriaComponent,
    AlumnoMisMateriasComponent,
    ResaltarDirective,
    ProfesorHomeComponent,
    CalificacionPipe,
    ProfesorMateriasComponent,
    ListarMateriasProfesorComponent,
    BajaUsuarioComponent,
    UsuariosBjaComponent,
    AltaExamenComponent,
    SelectAlumnoComponent,
    SelectMateriaComponent,
    ListarExamnesComponent,
    ExamenesComponent,
    ActasDeExamenComponent,
    ListadoDeAsignaturasComponent,
    ListadoAprobacionDirectaComponent,
    ListadoNoDirectaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireStorageModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    SweetAlert2Module
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
