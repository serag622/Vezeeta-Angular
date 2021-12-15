import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
// import * as firebase from 'firebase/compat';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  user: Observable<firebase.default.User | null>
  userId: string | any = '';

  constructor(private faAuth: AngularFireAuth) {
    this.user = faAuth.user
  }

  singup(email: string, password: string) {
    return this.faAuth.createUserWithEmailAndPassword(email, password)
  }

  login(email: string, password: string) {
    return this.faAuth.signInWithEmailAndPassword(email, password)
    // return this.faAuth.signInWithPopup( new firebase.default.auth.GoogleAuthProvider)

  }

  logout() {
    return this.faAuth.signOut()

  }
}
