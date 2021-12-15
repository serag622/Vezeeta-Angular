import { EventEmitter, Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';
import { User } from '../model/Users';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  // user : Observable<firebase.default.User | null>

  isSignedIn = new EventEmitter()

  constructor(private faAuth: AngularFireAuth , private us: UsersService) {
    // this.user = faAuth.user

    this.faAuth.authState.subscribe((user) => {
      if (user) {
        this.isSignedIn.emit(true);
      }
      else{
        this.isSignedIn.emit(false);
      }
    });

  }


  singup(email: string , password: string) {
    return this.faAuth.createUserWithEmailAndPassword(email, password)
  }

  loginDoctor(email: string, password: string) : Promise<any> {
    this.us.getUserbyEmail(email).subscribe((next) => {
      const user : User | any= next
      if(user.isDoctor){
        console.log('auth doctor')
      return this.faAuth.signInWithEmailAndPassword(email, password)
      }
      else{
        return Promise.reject()
      }
    })
    return Promise.reject()
  }
  

  loginUser(email: string , password: string){
    return this.faAuth.signInWithEmailAndPassword(email, password)
  }



  logout() {
    return this.faAuth.signOut()
  }
}
