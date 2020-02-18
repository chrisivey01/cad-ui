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

  citizensName: string;
  firstName: string;
  lastName: string;
  citizensRecord: any;
  info$: any;
  constructor(private mainService:MainService) { }

  ngOnInit() {

  }

  getData(){
    this.firstName = this.citizensName.split(" ")[0];
    this.lastName = this.citizensName.split(" ")[1];

    this.mainService.getCitizenData(this.firstName, this.lastName)
      .subscribe(response => {
        this.info$ = response;
      })

        // error => console.log(error)
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
