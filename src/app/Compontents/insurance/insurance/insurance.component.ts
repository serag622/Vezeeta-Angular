import { Component, OnInit } from '@angular/core';
import { Insurance } from 'src/app/model/Insurance.mpdel';
import { InsuranceService } from 'src/app/services/insurance-service.service';
@Component({
  selector: 'app-insurance',
  templateUrl: './insurance.component.html',
  styleUrls: ['./insurance.component.css']
})
export class InsuranceComponent implements OnInit {
  columnNumberArr: number[] = [0, 1];
  isMatches: boolean = true;
  insuranceList: Insurance[] | any = [];
  constructor(private insuranceService: InsuranceService) {
  }
  getALl() {
    this.insuranceService.getAllInsurance().subscribe(res => {
      this.insuranceList = res;
    })
  }
  ngOnInit(): void {
    this.getALl();
    console.log(this.insuranceList);
  }
  search(input: HTMLInputElement) {
    this.insuranceService.insuranceSearch.emit(input.value);
    console.log(input.value);
  }


}
