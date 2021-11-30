import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

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
      phone
    })
  }
}
