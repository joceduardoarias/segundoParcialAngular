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
    AltaMateriaComponent
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
