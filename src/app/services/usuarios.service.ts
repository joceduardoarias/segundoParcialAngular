import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/firestore";
import { Observable } from 'rxjs';
import { map, finalize } from 'rxjs/operators';
import { Usuario } from "../clases/usuario";

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private dbPath = '/usuariosParcialDos';
  usuariosRef : AngularFirestoreCollection<Usuario>
  // tipoUsuario:string = "";
  usuarios: Observable<Usuario[]>;

  constructor(private db: AngularFirestore) { 
    this.usuariosRef = db.collection(this.dbPath);
    //obtener coleción de usuarios
    this.usuarios = this.usuariosRef.snapshotChanges().pipe(map(actions=>{
      return actions.map(a=>{
        const data = a.payload.doc.data() as unknown as Usuario;
        return data;
      })
    }))

  }

  
  getAll(): AngularFirestoreCollection<Usuario>{
    return this.usuariosRef;
  }
  
 create(usuario:Usuario){
  return this.usuariosRef.add({...usuario});
 }

//  obtenerTipoUsuario(){
//   var usuarioLogueado = localStorage.getItem('usuario');
//   const snapshot = this.usuariosRef.get();

//   snapshot.subscribe(lista=>{
    
//     lista.docs.forEach(usuario=>{
//         if (usuario.data().email == usuarioLogueado) {
//           if (usuario.data().tipo == "admin") {
//             this.tipoUsuario = usuario.data().tipo;
//           }
//         }
//     });
    
//   });

// }

 getByEmail(email:string|null|undefined){
  return new Promise((resolve, reject) => {
    this.usuariosRef.get().subscribe((querySnapshot) => {
      let doc = querySnapshot.docs.find(doc => (doc.data() as Usuario).email == email);
      resolve(doc?.data());
    })
  });
 }

 
}
