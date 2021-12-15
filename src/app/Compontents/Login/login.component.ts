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

      if(this.isDoctor) {
        this.as.loginDoctor(data.email,data.password)
        .then((result) => {
           localStorage.setItem('User', JSON.stringify(result.user));
        }).then(() => {
            this.router.navigate(['/']);
          })
          .catch(err => {
            this.errorMessage = " That Email is not a Doctor "
          })
      }
      else{
        this.as.loginUser(data.email,data.password).then((result)=>{

          localStorage.setItem('User', JSON.stringify(result.user));
        }).then(() => {
            this.router.navigate(['/']);
          })
          .catch(err => {
            this.errorMessage = err.message
          })
      }
  }

  toBe() {
    this.router.navigate(['/Register'])
  }
}
