import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CriptoMoneda } from '../clases/cripto-moneda';

@Injectable({
  providedIn: 'root'
})
export class CriptoService {

  private dbPath = '/criptomonedas';
  CriptoMonedasRef : AngularFirestoreCollection<CriptoMoneda>
  CriptoMonedas : Observable<CriptoMoneda[]>;

  constructor(private db: AngularFirestore) {
    this.CriptoMonedasRef = db.collection(this.dbPath);

    //obtener coleción de CriptoMonedas
    this.CriptoMonedas = this.CriptoMonedasRef.snapshotChanges().pipe(map(actions=>{
      return actions.map(a=>{
        const data = a.payload.doc.data() as unknown as CriptoMoneda;
        data.id = a.payload.doc.id;
        return data;
      })
    }))

   }

   create(CriptoMoneda:CriptoMoneda){
    return this.CriptoMonedasRef.add({...CriptoMoneda});
   }

   update(id: string, data: CriptoMoneda): Promise<void> {
    return this.CriptoMonedasRef.doc(id).update({
      
    });
  }
}
