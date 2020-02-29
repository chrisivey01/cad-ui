import { PlateResponse } from './../../models/plate-response.model';
import { Citizen } from './../../models/citizen.model';
import { PlateService } from './../../services/plate.service';
import { Component, OnInit } from '@angular/core';
import { Plate } from '../../models/plate.model';

@Component({
  selector: 'app-plate-searcher',
  templateUrl: './plate-searcher.component.html',
  styleUrls: ['./plate-searcher.component.css']
})
export class PlateSearcherComponent implements OnInit {
  citizensPlate: string;
  plate: Plate;
  plateResponse$: PlateResponse;

  constructor(private plateService: PlateService) { }

  ngOnInit(): void {
  }

  getData(){
    this.plate = {
      plate:this.citizensPlate
    }
    
    this.plateService.getPlateData(this.plate)
      .subscribe(res => {
        this.plateResponse$ = res[0]
      })
    this.citizensPlate = '';
  }
}
