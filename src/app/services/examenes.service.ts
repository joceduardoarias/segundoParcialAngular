import { Injectable } from '@angular/core';
import { Examen } from '../clases/examen';
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/firestore";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ExamenesService {

  private dbPath = '/examenes';
  examenRef : AngularFirestoreCollection<Examen>
  // tipoUsuario:string = "";
  examenes: Observable<Examen[]>;

  constructor(private db: AngularFirestore) { 
    this.examenRef = db.collection(this.dbPath);
    //obtener coleción de usuarios
    this.examenes
     = this.examenRef.snapshotChanges().pipe(map(actions=>{
      return actions.map(a=>{
        const data = a.payload.doc.data() as unknown as Examen;
        data.id = a.payload.doc.id;
        return data;
      })
    }))

  }

  
  getAll(): AngularFirestoreCollection<Examen>{
    return this.examenRef;
  }
  
 create(usuario:Examen){
  return this.examenRef.add({...usuario});
 }


 delete(id: string): Promise<void> {
  console.log("Elimina este usuario",id);
  
  return this.examenRef.doc(id).delete();
}
update(id: string, data: Examen): Promise<void> {
  return this.examenRef.doc(id).update({
    alumno:data.alumno
  });
}
}
