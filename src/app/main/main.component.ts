import { CadSystemService } from './../cad-system.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  arrests;
  citizensName;

  constructor(private cadSystemService:CadSystemService) { }

  ngOnInit() {
    this.cadSystemService.dataLoaded.subscribe(()=>{
      this.arrests = this.cadSystemService.obtainArrestData();
    })
  }

  loadData(){
    this.cadSystemService.fetchArrestData(this.citizensName);
  }


}
