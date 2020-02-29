import { FinesService } from './../../services/fines.service';
import { Component, OnInit } from '@angular/core';
import { Fines } from '../../models/fines.model';
@Component({
  selector: 'app-fines',
  templateUrl: './fines.component.html',
  styleUrls: ['./fines.component.css']
})
export class FinesComponent implements OnInit {
  totalCost = 0;
  citizensSSN: string;
  fines: Fines;
  citations1 = [
    {
      "reason":"Misuse of a horn",
      "cost":200,
      "checked": false
    },
    {
      "reason":"Driving on the wrong side of the road",
      "cost":500,
      "checked": false
    },
    {
      "reason":"Illegal U-Turn",
      "cost":200,
      "checked": false
    },
    {
      "reason":"Illegal Parking",
      "cost":500,
      "checked": false
    },
    {
      "reason":"Faliure to Yield to Emergency Services",
      "cost":500,
      "checked": false
    },
    {
      "reason":"Driving without Insurance/Registration",
      "cost":300,
      "checked": false
    },
  ]

  citations2 = [
    {
      "reason":"Failing to stop at a Stop Sign",
      "cost":500,
      "checked": false
    },
    {
      "reason":"Failing to stop at a Red Light",
      "cost":500,
      "checked": false
    },
    {
      "reason":"Illegal Passing",
      "cost":400,
      "checked": false
    },
    {
      "reason":"Hit and Run",
      "cost":700,
      "checked": false
    },
    {
      "reason":"Exceeding Speeds Over 5-15 mph",
      "cost":300,
      "checked": false
    },
    {
      "reason":"Exceeding Speeds Over 15-30 mph",
      "cost":600,
      "checked": false
    },
  ]

  citations3 = [
    {
      "reason":"Exceeding Speeds Over > 30mph",
      "cost":1000,
      "checked": false
    },
    {
      "reason":"Possesion of an Illegal Substance",
      "cost":100,
      "checked": false
    },
    {
      "reason":"Illegal vehicle modifications",
      "cost":500,
      "checked": false
    },
    {
      "reason":"Driving a vehicle in dangerous condition",
      "cost":1000,
      "checked": false
    },
    {
      "reason":"Not wearing seatbelt",
      "cost":150,
      "checked": false
    }
  ]


  constructor(private finesService:FinesService) { 
  }

  ngOnInit(): void {
  }

  getFines(citations1, citations2, citations3, i, cost){
    if(citations1) {
      if(this.citations1[i].checked === false){
        this.totalCost += cost
        this.citations1[i].checked = true
      } else {
        this.totalCost -= cost
        this.citations1[i].checked = false
      }
    }

    if(citations2) { 
      if(this.citations2[i].checked === false){
        this.totalCost += cost
        this.citations2[i].checked = true
      } else {
        this.totalCost -= cost
        this.citations2[i].checked = false
      }
    }

    if(citations3) { 
      if(this.citations3[i].checked === false){
        this.totalCost += cost
        this.citations3[i].checked = true
      } else {
        this.totalCost -= cost
        this.citations3[i].checked = false
      }
    }
  }

  postFinesData(){
    let ssn = this.citizensSSN
    this.fines = {
      ssn: parseInt(ssn),
      totalCost: this.totalCost
    }

    this.finesService.postFinesData(this.fines).subscribe();
    this.citizensSSN = ''
    this.totalCost = 0;

  }
}
