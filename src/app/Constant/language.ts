import { LanguageService } from "../services/language.service";
export class Language{
    langeuage:String="ar";
    constructor(private languageService:LanguageService){
        this.languageService.langugeEvent.subscribe(res=>{
            this.langeuage=res;
            console.log(this.langeuage);
        })
    }
}