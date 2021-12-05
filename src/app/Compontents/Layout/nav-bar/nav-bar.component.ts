import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { User } from 'src/app/model/Users';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  isUser: boolean = false;
  // userDashbord !: User | any ;
  constructor(private languageService: LanguageService, private as: AuthService, private router: Router) { }

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
    changeLanguage( lang: HTMLAnchorElement) {
      let lan = lang.innerHTML;
      if (lan === "English") {
        this.languageService.langugeEvent.emit("ar")
      }
      else if (lan === "عربي") {
        this.languageService.langugeEvent.emit("en");
      }
      console.log(lang.innerHTML);
    }
}
