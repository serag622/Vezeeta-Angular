import { EventEmitter, Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore';
import { Region } from '../model/region.model';

@Injectable({
  providedIn: 'root'
})
export class regionService {
 // private region: Region[] = [];
 private regionCollection!:AngularFirestoreCollection<Region>
  searchEvent = new EventEmitter<String>();
  constructor(private fs:AngularFirestore) {
   
  }
  getAllRegions(){
    this.regionCollection=this.fs.collection<Region>("city");
    return this.regionCollection.valueChanges({idField:"id"});
  }
}
