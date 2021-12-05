import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private languageService: LanguageService) { }

  ngOnInit(): void {
  }

  changeLanguage(lang: HTMLAnchorElement) {
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
