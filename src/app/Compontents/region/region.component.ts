import { Component, OnInit } from '@angular/core';
import { regionService } from 'src/app/services/region-service.service';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent implements OnInit {

  constructor(private regionService:regionService) { }

  ngOnInit(): void {
  }
  search(input:HTMLInputElement){
   // console.log(input.value);
    this.regionService.searchEvent.emit(input.value);
  }

}
