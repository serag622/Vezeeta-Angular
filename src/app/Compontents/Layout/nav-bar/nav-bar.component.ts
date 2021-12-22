import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { User } from 'src/app/model/Users';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/services/language.service';
import { Subscription } from 'rxjs';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  // isUser !: boolean ;
  User !: User | any;
  userSubscription !: Subscription

  constructor(private languageService: LanguageService, private as: AuthService, private router: Router, private us: UsersService , private translationService: TranslateService) { }


  ngOnInit(): void {
    // this.as.user.subscribe(user => {
    //   if (user) {
    //     // this.userDashbord = user ;
    //     this.isUser = true
    //     this.as.userId = user.uid
    //   }
    //   else this.isUser = false;
    // })

    // this.as.isSignedIn.subscribe(isSignedIn => {
    //   this.isUser = isSignedIn;
    //   const user = JSON.parse(localStorage.getItem('User') as string)
    //   if(this.isUser){
    //     this.userSubscription = this.us.getUser(user.uid).subscribe(result => {
    //        this.User = result;
    //        console.log(this.userSubscription);
    //      })
    //   }
    //   else if(!this.isUser && this.userSubscription){
    //      this.userSubscription.unsubscribe()
    //      console.log(this.userSubscription.closed)
    //   }
    // })

    this.userSubscription = this.as.User.subscribe(user => {
      this.User =user
    })
  }

  logout() {
    this.as.logout().then(() => {
      // this.isUser = false;
      localStorage.removeItem('User')
      this.router.navigate(['/'])
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
