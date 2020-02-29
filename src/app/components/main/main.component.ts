import { MainService } from '../../services/main.service';
import { Component, OnInit } from '@angular/core';
import { Citizen } from '../../models/citizen.model';
import { SSN } from '../../models/ssn.model';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  citizensSSN: string;
  citizenInfo$: Citizen;
  ssn:SSN;
  constructor(private mainService:MainService) { }

  ngOnInit() {

  }

  getData(){
    this.ssn = {
      ssn:parseInt(this.citizensSSN)
    }
    
    this.mainService.getCitizenData(this.ssn)
    .subscribe(res => this.citizenInfo$ = res[0]);

    this.citizensSSN = '';
  }
}
