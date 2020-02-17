import { MainService } from '../../services/main.service';
import { Component, OnInit } from '@angular/core';
import player from '../json/player.json';
import { CitizensRequest } from '../../models/citizens.request';
import { Citizens } from '../../models/citizens.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  citizensName;
  firstName;
  lastName;
  citizensRecord;


  constructor(private mainService:MainService, private citizensRequest:CitizensRequest) { }

  ngOnInit() {

  }

  getData(){
    this.citizensRequest.firstname = this.citizensName.split()[0];
    this.citizensRequest.lastname = this.citizensName.split()[1];

    this.mainService.getCitizenData(this.citizensRequest)
      .subscribe(citizens:Citizens)
  }
      // this.cadSystemService.dataLoaded.subscribe(()=>{
    //   this.arrests = this.cadSystemService.obtainArrestData();
    // })
  // @HostListener('window:keyup', ['$event'])
  // handleKeyDown(event:KeyboardEvent){
  //   if(event.keyCode === 27 || event.keyCode === 113) {
  //     Nui.send('CloseUI');
  //   }
  // }

  // loadData(){
  //   this.cadSystemService.fetchArrestData(this.citizensName);
  // }
}
