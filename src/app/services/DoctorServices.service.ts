import { Injectable } from "@angular/core";
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/compat/firestore";
import { Observable } from "rxjs";
import { Doctor } from "../model/Doctor.model";


@Injectable({
  providedIn: 'root'
})


export class DocdorService {

  doctorCollection : AngularFirestoreCollection<Doctor>;
  Doctors !: Observable<Doctor[]>;

  constructor(private firestore:AngularFirestore){
    this.doctorCollection = firestore.collection<Doctor>("Doctors");

  }

  getAllDoctors(){
  this.Doctors=this.doctorCollection.valueChanges({ idField: 'id' });
  return this.Doctors
  }

  getDoctorByID(id :string){
   const doctor = this.doctorCollection.doc(id).valueChanges({ idField: 'id' })
   return doctor;
  }

  getDoctorsBy(name :string,value :string){
    return this.firestore.collection('Doctors',ref=>ref.where( name,'==' ,value)).valueChanges({ idField: 'id' })
  }




}
