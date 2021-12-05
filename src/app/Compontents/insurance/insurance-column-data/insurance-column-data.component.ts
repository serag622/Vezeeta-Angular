import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Insurance } from 'src/app/model/Insurance.mpdel';
import { InsuranceService } from 'src/app/services/insurance-service.service';

@Component({
  selector: 'app-insurance-column-data',
  templateUrl: './insurance-column-data.component.html',
  styleUrls: ['./insurance-column-data.component.css']
})
export class InsuranceColumnDataComponent implements OnChanges {
  @Input() column!: number;
  insuranceArr!: Insurance[] | any;
  insuranceArrToBeViewed!: Insurance[]|any;
  constructor(private insuranceService: InsuranceService) {
    // console.log(this.getAllInsurance());
    this.insuranceArr = this.insuranceService.getAllInsurance();
  }

  ngOnInit(): void {
    //this.getAllInsurances();
    // this.insuranceArr = 
    this.insuranceService.getAllInsurance().subscribe(res => {
      this.insuranceArr = res;
      this.sliceArr(this.insuranceArr);
    });
  }



  ngOnChanges() {
    if (this.column >= 0) {
      this.insuranceService.getAllInsurance().subscribe(res=>{
        this.insuranceArr=res;
        this.sliceArr(this.insuranceArr);
        console.log(this.insuranceArr)
      }); 
    }
    
  }

  sliceArr(insuranceArr: Insurance[]) {
    let firstEle: number = (this.column) * Math.ceil(insuranceArr?.length / 2);
    let lastEle: number = (this.column) * Math.ceil(insuranceArr?.length / 2) + Math.ceil(insuranceArr?.length / 2);
    this.insuranceArrToBeViewed = insuranceArr?.slice(firstEle, lastEle);
      console.log(this.column, this.insuranceArrToBeViewed)
  }
  filterInsurance(value: String) {
    let arr: Insurance[] = [];
    console.log(value);
    if (value === "") {
      this.insuranceService.isMatchesSearch.emit(true);
      this.sliceArr(this.insuranceArr);
    } else {
      for (let i = 0; i < this.insuranceArr?.length; i++) {
        if (!arr.includes(this.insuranceArr[i])) {
          if (this.insuranceArr[i].namear?.includes(value + "")) {
            arr.push(this.insuranceArr[i])
          }
        }

      }

      console.log(arr);
      if (arr.length) {
        this.insuranceService.isMatchesSearch.emit(true);
      } else {
        this.insuranceService.isMatchesSearch.emit(false);
      }
      this.sliceArr(arr);
    }


  }
}
