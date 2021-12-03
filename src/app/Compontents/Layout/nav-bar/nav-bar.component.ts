import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { User } from 'src/app/model/Users';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  isUser: boolean = false;
  // userDashbord !: User | any ;
  constructor(private as: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.as.user.subscribe(user => {
      if (user) {
        // this.userDashbord = user ;
        this.isUser = true
        this.as.userId = user.uid
      }
      else this.isUser = false;
    })
  }

  logout() {
    this.as.logout().then(() => {
      this.router.navigate(['/Login'])
    })
  }
}
