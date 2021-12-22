import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { location } from "../model/Doctor.model";
import { Reservation } from '../model/Reservation.model';


@Injectable({
  providedIn: 'root'
})

export class ReservationService {

  constructor(private firebase: AngularFirestore) { }

  AddReservation(doctorName:string,  doctorLocation: location,  doctorPhone: number,  bookDate :string, price:number, bookhour:number,  userName: string,   userEmail: string,  userPhone: string){
   return this.firebase.collection('Reservation').add({
      doctorName,
      doctorLocation,
      doctorPhone,
      bookDate,
      price,
      bookhour,
      userName,
      userEmail,
      userPhone,
      isCancelled: false
    })
  }

  GetReservationofDay(doctorName:string,bookDate:string){
    return this.firebase.collection('Reservation').ref.where('doctorName','==',doctorName).where('bookDate','==',bookDate).get()
  }

  getReservationoById(id:string){
    return this.firebase.collection('Reservation').doc(id).valueChanges({ idField: 'id' });

  }

  deleteReservationoById(id:string){
    return this.firebase.collection('Reservation').doc(id).update({isCancelled : true})
  }

  GetAllReservationsofUser(name:string){
    return this.firebase.collection('Reservation',ref=>ref.where('userName','==',name)).valueChanges({ idField: 'id' })
  }

  GetAllReservationofDoctor(name:string){
    return this.firebase.collection('Reservation',ref=>ref.where('doctorName','==',name)).valueChanges({ idField: ''})
  }



}
