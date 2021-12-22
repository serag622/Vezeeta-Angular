import { Component, OnInit } from '@angular/core';
import { CategoryItems } from 'src/app/model/CategoryItems.model';
import { CategoryService } from 'src/app/services/category.service';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-el-ta5sos',
  templateUrl: './el-ta5sos.component.html',
  styleUrls: ['./el-ta5sos.component.css']
})
export class ElTa5sosComponent implements OnInit {
  langFlag:boolean=false;
  categoies?: CategoryItems[] | any;
  categoriesToBeViewd?: CategoryItems[] | any;
  constructor(private categoryService: CategoryService,private lang:LanguageService) { 
    this.lang.langugeEvent.subscribe(res=>{
      this.langFlag=res;
     // console.log(this.langFlag)
    })
  }

  ngOnInit(): void {
    this.categoryService.getAllCategories().subscribe(res => {
      this.categoies = res;
      console.log(this.categoies[0]);
    });
    

  }


}
