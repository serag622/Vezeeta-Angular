import { EventEmitter, Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Insurance } from '../model/Insurance.mpdel';
@Injectable({
  providedIn: 'root'
})
export class InsuranceService {
 // private insuranceArr!: Observable<Insurance[]>;
  private insuranceCollection!: AngularFirestoreCollection<Insurance>;
  public insuranceSearch = new EventEmitter<String>();
  public isMatchesSearch = new EventEmitter<boolean>();

  constructor(private fs: AngularFirestore) {
  }
  getAllInsurance(){
   this.insuranceCollection= this.fs.collection<Insurance>("Insurance");
   return this.insuranceCollection.valueChanges({idField:"id"});
    }


}
