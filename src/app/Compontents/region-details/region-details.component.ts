import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Region } from 'src/app/model/region.model';
import { RegionDetails } from 'src/app/model/regionDetails.model';
import { regionService } from 'src/app/services/region-service.service';

@Component({
  selector: 'app-region-details',
  templateUrl: './region-details.component.html',
  styleUrls: ['./region-details.component.css']
})
export class RegionDetailsComponent implements OnChanges {
  regionList: Region[] = [];
  regionDetailsToBeViewed: RegionDetails[] = [];

  constructor(private regionService: regionService) {
    this.regionService.searchEvent.subscribe((next) => {
      this.filterData(next);
    })
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.regionList = this.regionService.getAllRegions();
    this.regionDetailsToBeViewed = this.regionList;
    console.log(this.regionList)
  }

  ngOnInit(): void {
    this.regionList = this.regionService.getAllRegions();
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
        if (this.regionList[i].name.includes(txt + "") && !filterArr.includes(this.regionList[i])) {
          filterArr.push(this.regionList[i]);
        }
        else {
          for (var k = 0; k < this.regionList.length; k++) {
            for (var j = 0; j < this.regionList[k].regionDetails.length; j++) {
              if (this.regionList[k].regionDetails[j].name.includes(txt + "") && !filterArr.includes(this.regionList[k])) {
                filterArr.push(this.regionList[k])
                console.log(this.regionList[k].regionDetails[j])
              }
            }
          }
        }
      }

      this.regionDetailsToBeViewed = filterArr;
    }
  }




}
