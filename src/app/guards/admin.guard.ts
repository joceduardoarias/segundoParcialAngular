import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Usuario } from '../clases/usuario';
import { UsuariosService } from "../services/usuarios.service";
import { AuthService } from "../services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  
  

  constructor(private router:Router,private usuarioService:UsuariosService, private auth:AuthService){}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const url:string = state.url;
    return this.chequearUsuario(url);
  }
  
 async chequearUsuario(url:string){
    
  var user = await this.auth.getCurrentUser();

  var dataUser : any = await this.usuarioService.getByEmail(user?.email);
  
  if (dataUser) {
    console.log(dataUser);
    
    if(dataUser.tipo == 'administrador'){
      return true;
    }else{
      this.router.navigateByUrl('login');
      return false;
    }  
  }else{
      this.auth.signOut();
      this.router.navigateByUrl('login');
      return false;
  }

 }
 
}

/*https://github.com/matias2806/modeloSegundoParcial/blob/main/src/app/guards/g-auth.guard.ts*/