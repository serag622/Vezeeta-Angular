import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { User } from 'src/app/model/Users';
import { LanguageService } from 'src/app/services/language.service';
import { Subscription } from 'rxjs';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  isUser !: boolean ;
  // userDashbord !: User | any ;
  User !: User | any;
  userSubscription !: Subscription
  techSpecMeta !: { make: string; };
  constructor(private languageService: LanguageService, private as: AuthService, private router: Router, private us: UsersService) { }



  ngOnInit(): void {
    // this.as.user.subscribe(user => {
    //   if (user) {
    //     // this.userDashbord = user ;
    //     this.isUser = true
    //     this.as.userId = user.uid
    //   }
    //   else this.isUser = false;
    // })
    this.techSpecMeta= {make: ""};

    this.as.isSignedIn.subscribe(isSignedIn => {
      this.isUser = isSignedIn;
      const user = JSON.parse(localStorage.getItem('User') as string)
      if(this.isUser){
        this.userSubscription = this.us.getUser(user.uid).subscribe(result => {
           this.User = result;
         })
      }
      else {
         this.userSubscription.unsubscribe()
      }
    })


  }

  logout() {
    this.as.logout().then(() => {
      this.isUser = false;
      localStorage.removeItem('User')
      this.router.navigate(['/'])
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
