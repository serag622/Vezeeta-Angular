import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { LanguageService } from 'src/app/services/language.service';
import { regionService } from 'src/app/services/region-service.service';
import { Region } from '../../../model/region.model'


@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent implements OnInit {
  regionList: Region[] | any = [] 
  constructor(private regionService: regionService, private db: AngularFirestore, private languageService: LanguageService) {

  }

  ngOnInit(): void {
    this.getAll();
    this.languageService.langugeEvent.subscribe(res => {
      // this.lang = res;
     })
  }
  getAll() {
    this.regionService.getAllRegions().subscribe(res => {
      this.regionList = res;
    //  console.log(this.regionList[0]);
    })
  }
  search(input: HTMLInputElement) {
    // console.log(input.value);
    // this.languageService.langugeEvent.emit(input.value);
    this.regionService.searchEvent.emit(input.value);


    // this.regionService.getAll();
  }

}
