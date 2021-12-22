import { EventEmitter, Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { User } from '../model/Users';
import { UsersService } from './users.service';
import { switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})

export class AuthService {

  User : BehaviorSubject<User | any> = new BehaviorSubject(null);

  isSignedIn = new EventEmitter()

  constructor(private faAuth: AngularFireAuth , private us: UsersService,private fs : AngularFirestore, private router : Router) {

    this.faAuth.authState.pipe(switchMap((auth)=>{
      if(auth){
        return this.fs.doc('users/'+auth.uid).valueChanges()
      }else{
        return  of(null);
      }
    })).subscribe(user=>{
      localStorage.setItem("User",JSON.stringify(user));
      this.User.next(user)
    })

  }

  singup(email: string , password: string) {
    return this.faAuth.createUserWithEmailAndPassword(email, password)
  }


  // loginDoctor(email: string, password: string)  {
  //   this.us.getUserbyEmail(email).subscribe((next) => {
  //     const user : User | any= next
  //     console.log('doctor'+user)

  //   })
  // }


  // loginUser(email: string , password: string) {
  //   this.us.getUserbyEmail(email).subscribe((next) => {
  //     const user : User | any = next
  //     console.log('user'+user)
  //   })
  // }



  login(email: string , password: string,isDoctor:boolean):Promise<any>{

  // this.us.getUserbyEmail(email).subscribe((next) => {
  //  const user : User[] | any = next;
  //  console.log(user)
  //  console.log(user[0])
  //   switch (user[0].isDoctor) {
  //     case isDoctor:
  //       console.log('ok')
  //       return this.log(email, password)
  //         break;
  //     default:
  //       return Promise.reject
  //         break;
  //   }
  // })
  //  return Promise.reject()

   this.faAuth.signInWithEmailAndPassword(email, password).then((data: any) => {
      this.us.getUserbyEmail(data?.user?.email).subscribe((user: any) => {
        if (user[0].isDoctor == isDoctor) {
          return Promise.resolve(user[0]);
        }
        else {
          return Promise.reject;
        }
      });
    });

    return Promise.resolve()
  }


  log(email: string , password: string){
    return this.faAuth.signInWithEmailAndPassword(email, password)
  }


  logout() {
    return this.faAuth.signOut()
  }

}


