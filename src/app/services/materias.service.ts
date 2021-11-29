import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/firestore";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Materia } from "../clases/materia";
@Injectable({
  providedIn: 'root'
})
export class MateriasService {

  private dbPath = '/criptomonedas';
  materiasRef : AngularFirestoreCollection<Materia>
  materias : Observable<Materia[]>;

  constructor(private db: AngularFirestore) {
    this.materiasRef = db.collection(this.dbPath);

    //obtener coleción de materias
    this.materias = this.materiasRef.snapshotChanges().pipe(map(actions=>{
      return actions.map(a=>{
        const data = a.payload.doc.data() as unknown as Materia;
        data.id = a.payload.doc.id;
        return data;
      })
    }))

   }

   create(materia:Materia){
    return this.materiasRef.add({...materia});
   }

   update(id: string, data: Materia): Promise<void> {
    return this.materiasRef.doc(id).update({
      cupo: data.cupo,
      inscriptos: data.inscriptos,
    });
  }
}
