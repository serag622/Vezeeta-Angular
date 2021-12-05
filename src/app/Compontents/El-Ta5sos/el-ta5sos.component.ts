import { Component, OnInit } from '@angular/core';
import { CategoryItems } from 'src/app/model/CategoryItems.model';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-el-ta5sos',
  templateUrl: './el-ta5sos.component.html',
  styleUrls: ['./el-ta5sos.component.css']
})
export class ElTa5sosComponent implements OnInit {
  categoies?: CategoryItems[] | any;
  categoriesToBeViewd?: CategoryItems[] | any;
  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getAllCategories().subscribe(res => {
      this.categoies = res;
      console.log(this.categoies[0]);
    });

  }


}
