import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Region } from 'src/app/model/region.model';
import { RegionDetails } from 'src/app/model/regionDetails.model';
import { LanguageService } from 'src/app/services/language.service';
import { regionService } from 'src/app/services/region-service.service';

@Component({
  selector: 'app-region-details',
  templateUrl: './region-details.component.html',
  styleUrls: ['./region-details.component.css']
})
export class RegionDetailsComponent implements OnChanges {
  regionList: Region[] | any = [];
  regionDetailsToBeViewed: RegionDetails[] = [];
  num: number = 0;
  columsArr: number[] = [0, 1, 2]
  langFlag!:boolean;

  constructor(private regionService: regionService,private lang:LanguageService) {
    this.lang.langugeEvent.subscribe(res=>{
      this.langFlag=res;
      console.log(this.langFlag,"details")
    })
  }
  getAll() {
    this.regionService.getAllRegions().subscribe(res => {
      this.regionList = res;
    //  console.log(res);
      this.searchEvent();

    })
  }
  searchEvent() {
    this.regionService.searchEvent.subscribe((next) => {
      //   this.filterData(next);
      // this.filteration(next)
    })
  }
  ngOnChanges(changes: SimpleChanges): void {
  //  this.regionList = this.regionService.getAllRegions();
    this.regionDetailsToBeViewed = this.regionList;
    console.log(this.regionList)
  }

  ngOnInit(): void {
    this.getAll()
  //  this.regionList = this.regionService.getAllRegions();
    this.regionDetailsToBeViewed = this.regionList;
    console.log(this.regionList)

  }
  filterData(txt: String) {
    let filterArr: RegionDetails[] = [];
    if (txt == "") {
      this.regionDetailsToBeViewed = this.regionList;
    }
    else {
      for (var i = 0; i < this.regionList.length; i++) {
        if (this.regionList[i].name.search(txt + "")) {
          console.log("search", this.regionList[i]);
        }
        if (this.regionList[i].name.includes(txt + "") && !filterArr.includes(this.regionList[i])) {
          filterArr.push(this.regionList[i]);
        }
        else {
          for (var k = 0; k < this.regionList.length; k++) {
            for (var j = 0; j < this.regionList[k].regionDetails.length; j++) {
              if (this.regionList[k].regionDetails[j].name.includes(txt + "") && !filterArr.includes(this.regionList[k])) {
                filterArr.push(this.regionList[k])
                //   console.log(this.regionList[k].regionDetails[j]);
                console.log(this.regionList[k], this.regionList[k].regionDetails[j])
              }
            }
          }
        }
      }

      this.regionDetailsToBeViewed = filterArr;
    }
  }

}
