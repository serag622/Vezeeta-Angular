import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  errorMessage: string = ''

  isDoctor: boolean = false

  constructor(private as: AuthService, private router: Router) { }

  ngOnInit(): void { }

  login(form: any) {
    let data = form.value;
      // if(this.isDoctor) {
      //   console.log('doctor')
      //   this.as.loginDoctor(data.email,data.password)
      // }
      // else{
      //   console.log('user')
      //   this.as.loginUser(data.email,data.password)
      // }
      console.log(this.isDoctor)
      this.as.login(data.email,data.password,this.isDoctor).then(() => {
        this.errorMessage=''
        this.router.navigate(['/'])
      }).catch(() => {
        this.errorMessage=' the email or password is invalid '
      })

  }

  toBe() {
    this.router.navigate(['/Register'])
  }
}
