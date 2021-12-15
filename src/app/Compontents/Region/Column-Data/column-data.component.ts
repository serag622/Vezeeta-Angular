import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Region } from 'src/app/model/region.model';
import { RegionDetails } from 'src/app/model/regionDetails.model';
import { LanguageService } from 'src/app/services/language.service';
import { regionService } from 'src/app/services/region-service.service';

@Component({
  selector: 'app-column-data',
  templateUrl: './column-data.component.html',
  styleUrls: ['./column-data.component.css']
})
export class ColumnDataComponent implements OnChanges {
  regionList: Region[] | any = []
  regionDetailsList: RegionDetails[] | any = [];
  regionDetailsToBeViewed: RegionDetails[] | any = [];
  @Input() colNum!: number;
  @Input() index!: number;
  langFlag!:boolean;
  constructor(private regionService: regionService,private lang:LanguageService) {
    this.lang.langugeEvent.subscribe(res=>{
      this.langFlag=res;
     console.log(this.langFlag,"coloumn")
    })
  }
  getAll() {
    this.regionService.getAllRegions().subscribe(res => {
      this.regionList = res;
      //  console.log(this.regionList[0].regions);
      // this.regionDetailsToBeViewed=this.regionList.slice();
      this.searchEvent();
      if (this.index >= 0) {
        this.regionDetailsList = this.regionList[this.index].regions
        this.sliceArray(this.regionDetailsList);
      }
    })
  }
  searchEvent() {
    this.regionService.searchEvent.subscribe((next) => {
      //   this.filterData(next);
      // this.filteration(next)
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.getAll()

  }

  sliceArray(regionArr: RegionDetails[]) {
    var firstEle: number = this.colNum * Math.ceil(regionArr.length / 3);
    var lastEle: number = this.colNum * Math.ceil(regionArr.length / 3) + Math.ceil(regionArr.length / 3);
    this.regionDetailsToBeViewed = regionArr.slice(firstEle, lastEle);
  }


  filterData(txt: String) {
    let filterArr: RegionDetails[] = [];
    if (txt == "") {
      //  this.sliceArray(this.regionDetailsList);
    }
    else {
      for (var i = 0; i < this.regionDetailsList.length; i++) {
        if (this.regionDetailsList[i].name.includes(txt + "")) {
          filterArr.push(this.regionDetailsList[i]);
        }
      }
      //  this.sliceArray(filterArr);
      //   console.log(filterArr)
    }
  }
  ngOnInit(): void {
    this.getAll();
    //console.log(this.regionList)
    //  this.sliceArray(this.regionDetailsList)
  }


}
