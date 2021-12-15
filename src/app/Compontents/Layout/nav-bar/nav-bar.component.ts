import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { User } from 'src/app/model/Users';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  isUser: boolean = false;
  // userDashbord !: User | any ;
  constructor(private languageService: LanguageService,
    private as: AuthService,
    private router: Router,
    private translationService: TranslateService) { }

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
  changeLanguage(lang: HTMLAnchorElement) {
    let lan = lang.innerHTML;
    if (lan === "English") {
      // lang.innerHTML = "عربي"
      this.languageService.langugeEvent.emit(false);
      this.translationService.use("en");
    }
    else if (lan === "عربي") {
      this.languageService.langugeEvent.emit(true);
      //  lang.innerHTML = "English"
      this.translationService.use("ar");
    }
    console.log(lang.innerHTML);
  }
}
