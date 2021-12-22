import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { User } from '../model/Users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private fs: AngularFirestore ) { }

  addNewUser (id : any , name : string , password : string , email : string , phone : number) {
    this.fs.doc('users/' + id ).set({
      name ,
      password,
      email,
      phone,
      isAdmin: false,
      isDoctor: false
    })
  }

  getUser(id :string){
  return( this.fs.collection('users').doc(id).valueChanges())
  }

  getUserbyEmail(email: string ){
    return this.fs.collection('users',ref=>ref.where('email','==',email)).valueChanges({ idField: 'id' })
  }



}
