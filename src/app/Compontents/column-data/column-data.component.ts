import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Region } from 'src/app/model/region.model';
import { RegionDetails } from 'src/app/model/regionDetails.model';
import { regionService } from 'src/app/services/region-service.service';

@Component({
  selector: 'app-column-data',
  templateUrl: './column-data.component.html',
  styleUrls: ['./column-data.component.css']
})
export class ColumnDataComponent implements OnChanges {
  regionList: Region[]=[]
  regionDetailsList: RegionDetails[] = [];
  regionDetailsToBeViewed: RegionDetails[] = [];
  @Input() colNum!: number;
  @Input() index!: number;
  constructor(private regionService: regionService) {
    this.regionList = this.regionService.getAllRegions();
    this.regionService.searchEvent.subscribe((next) => {
      this.filterData(next);
    })
    

  }
  ngOnChanges(changes: SimpleChanges): void {
    // throw new Error('Method not implemented.');
   console.log(this.index)
   if(this.index>=0){
   this.regionDetailsList = this.regionList[this.index].regionDetails
   this.sliceArray(this.regionDetailsList);
   }
  }

  sliceArray(regionArr: RegionDetails[]) {
    var firstEle: number = this.colNum * Math.ceil(regionArr.length / 3);
    var lastEle: number = this.colNum * Math.ceil(regionArr.length / 3) + Math.ceil(regionArr.length / 3);
    this.regionDetailsToBeViewed = regionArr.slice(firstEle, lastEle);
  }


  filterData(txt: String) {
    let filterArr: RegionDetails[] = [];
    if (txt == "") {
      this.sliceArray(this.regionDetailsList);
    }
    else {
      for (var i = 0; i < this.regionDetailsList.length; i++) {
        if (this.regionDetailsList[i].name.includes(txt + "")) {
          filterArr.push(this.regionDetailsList[i]);
        }
      }
      this.sliceArray(filterArr);
      //   console.log(filterArr)
    }
  }
  ngOnInit(): void {
    this.regionList = this.regionService.getAllRegions();
    this.sliceArray(this.regionDetailsList)
  }


}
