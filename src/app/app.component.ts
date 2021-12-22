import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from './services/language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Vezeeta-Angular';
  lang:String = 'ar';
  langEvent:String ='rtl';
  constructor(private translateService:TranslateService,private languageService:LanguageService){
    this.translateService.setDefaultLang("ar");

    this.translateService.onLangChange.subscribe(res=>{
      this.lang=res.lang;
      if(this.lang==="ar"){
        this.langEvent="rtl"
      }else{
        this.langEvent="ltr"
      }
    });
  }

}
