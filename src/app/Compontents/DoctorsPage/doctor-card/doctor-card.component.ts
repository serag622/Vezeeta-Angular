import { Component, Input, OnInit } from '@angular/core';
import { Doctor } from 'src/app/model/Doctor.model';

@Component({
  selector: 'app-doctor-card',
  templateUrl: './doctor-card.component.html',
  styleUrls: ['./doctor-card.component.css']
})
export class DoctorCardComponent implements OnInit {
  @Input() Doctor !:Doctor | any;

  User:Doctor | any =JSON.parse(localStorage.getItem('User') as string)
  constructor() { }

  ngOnInit(): void {
  }

}
