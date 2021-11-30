import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';
@Injectable({
  providedIn: 'root'
})

export class AuthService {

  // user : Observable<firebase>

  constructor(private faAuth: AngularFireAuth , private firebase: AngularFirestore) {
    // this.user = faAuth.user
   }

  singup (email : string , password : string) {
   return this.faAuth.createUserWithEmailAndPassword(email , password)
  }

  login (email : string , password : string) {
    return this.faAuth.signInWithEmailAndPassword(email , password)
  }

}
