import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/firestore";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Materia } from "../clases/materia";
@Injectable({
  providedIn: 'root'
})
export class MateriasService {

  private dbPath = '/materias';
  materiasRef : AngularFirestoreCollection<Materia>
  materias : Observable<Materia[]>;

  constructor(private db: AngularFirestore) {
    this.materiasRef = db.collection(this.dbPath);

    //obtener coleción de materias
    this.materias = this.materiasRef.snapshotChanges().pipe(map(actions=>{
      return actions.map(a=>{
        const data = a.payload.doc.data() as unknown as Materia;
        return data;
      })
    }))

   }

   create(materia:Materia){
    return this.materiasRef.add({...materia});
   }
   
}
