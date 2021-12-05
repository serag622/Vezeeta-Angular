import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Doctor } from 'src/app/model/Doctor.model';
import { DocdorService } from 'src/app/services/DoctorServices.service';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit,OnDestroy {

  Doctors: Doctor[] | any  = [];
  DocObserable !: Subscription;

  pageSize :number = 8;
  noOpages :number[]=[] ;
  DoctorsViewed :Doctor[] = [];
  currentPage :number = 0;


  constructor(private ds:DocdorService) {}

  ngOnInit(): void {
    this.DocObserable = this.ds.getAllDoctors().subscribe(data => {
      this.Doctors=data
      this.paging()
      this.sliceArray()
    })

  }

  ngOnDestroy() : void {
    this.DocObserable.unsubscribe()
  }

  paging(){
    const numberOfPages =Math.ceil(this.Doctors.length/this.pageSize);
    for(let i = 0; i < numberOfPages; i++) {
      this.noOpages.push(i+1);
    }
  }

  sliceArray(){
    this.DoctorsViewed = this.Doctors.slice(this.currentPage *this.pageSize, (this.currentPage * this.pageSize) + this.pageSize)
  }

  onPagenation(i : number) {
    if( i > -1 && i < this.noOpages.length ) {
      this.currentPage =i;
      this.sliceArray()
    }

  }
}
