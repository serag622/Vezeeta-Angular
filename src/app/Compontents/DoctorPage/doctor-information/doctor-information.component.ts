import { Component, Input, OnInit } from '@angular/core';
import { Doctor } from 'src/app/model/Doctor.model';

@Component({
  selector: 'app-doctor-information',
  templateUrl: './doctor-information.component.html',
  styleUrls: ['./doctor-information.component.css']
})
export class DoctorInformationComponent implements OnInit {

  @Input() doctor !:Doctor | any;
  techSpecMeta !: { make: string; };
  constructor() { }

  ngOnInit(): void {
    this.techSpecMeta= {make: ""};
  }

}
