import { Component, Input, OnInit } from '@angular/core';
import { Doctor } from 'src/app/model/Doctor.model';

@Component({
  selector: 'app-booking-information',
  templateUrl: './booking-information.component.html',
  styleUrls: ['./booking-information.component.css']
})
export class BookingInformationComponent implements OnInit {

  @Input() doctor !:Doctor | any
  constructor() { }

  ngOnInit(): void {
  }

}
