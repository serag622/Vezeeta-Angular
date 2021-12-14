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

  constructor(private as: AuthService, private router: Router) { }

  ngOnInit(): void { }

  login(form: any) {
    let data = form.value;
    this.as.login(data.email, data.password)
      .then(result => {
        this.errorMessage = ''
        console.log(result)
        localStorage.setItem('User', JSON.stringify(result.user));
      })
      .then(() => {
        this.router.navigate(['/']);
      })
      .catch(err => {
        this.errorMessage = err.message
      })


  }

  toBe() {
    this.router.navigate(['/Register'])
  }
}
