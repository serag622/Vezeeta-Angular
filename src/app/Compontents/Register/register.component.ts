import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/Users';
import { AuthService } from 'src/app/services/auth.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {

 errorMessage: string = ''

  constructor(private as: AuthService , private us: UsersService, private router : Router) {}

  ngOnInit(): void {}

  signup(form: any) {
    let data: User = form.value
    this.as.singup(data.email, data.password)
    .then(result => {
      this.errorMessage = ''
      this.us.addNewUser(result.user?.uid , data.name , data.password , data.email , data.phone)
      localStorage.setItem('User',JSON.stringify(result.user))
      }).then(() => {
        this.router.navigate(['/'])
    })
    .catch(err => {
      this.errorMessage = err.message
    })
  }
}
