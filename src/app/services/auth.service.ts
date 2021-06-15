import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  usuarioLogueadoEmail:string|null = null;

  constructor(private afAuth: AngularFireAuth,
              private router: Router) {
               }

 /**
  * Este método es el encargado de autenticar los usuarios de la app
  */
 public singIn (email :string, password:string) {
   return this.afAuth.signInWithEmailAndPassword(email,password).then(value=>{
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
}
