import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from "@angular/router";
import { Usuario } from '../clases/usuario';
import { UsuariosService } from "../services/usuarios.service";
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser!:any;

  constructor(private afAuth: AngularFireAuth,private router: Router,private usuarioService:UsuariosService) {
               }

 /**
  * Este método es el encargado de autenticar los usuarios de la app
  */
 public async singIn (email :string, password:string) {
    await this.afAuth.signInWithEmailAndPassword(email,password).then(value=>{
     localStorage.setItem('usuario',email);
     this.router.navigateByUrl('/home');          
   }).catch(err=>{
     console.log('Algo esta funcionando mal: ', err.message);     
   });
 }              
 /**
  * cuando el usuario presione salir de la app lo llevará al login
  */
 public  signOut() {
  this.afAuth.signOut().then(() => {
    localStorage.clear();
    this.router.navigate(['/login']);
  });
 }
 /**
  * 
  */
 public  registrar(email:string, password:string) {
   return this.afAuth.createUserWithEmailAndPassword(email,password);
 }
 
 public isAuth(){
   
  return this.afAuth.authState;
   
 }

 getCurrentUser() {
  return this.afAuth.authState.pipe(first()).toPromise();
}
 
}
