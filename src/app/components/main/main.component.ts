import { Observable } from 'rxjs';
import { MainService } from '../../services/main.service';
import { Component, OnInit } from '@angular/core';
import { Citizen } from '../../models/citizen.model';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  citizensName: string;
  firstName: string;
  lastName: string;
  citizensRecord: any;
  citizenInfo$: Citizen;
  constructor(private mainService:MainService) { }

  ngOnInit() {

  }

  getData(){
    this.firstName = this.citizensName.split(" ")[0];
    this.lastName = this.citizensName.split(" ")[1];

    this.mainService.getCitizenData(this.firstName, this.lastName)
      .subscribe(res => this.citizenInfo$ = res[0])
    }
}
