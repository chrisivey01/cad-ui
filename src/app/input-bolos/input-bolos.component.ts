import { BolosService } from '../services/bolos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-bolos',
  templateUrl: './input-bolos.component.html',
  styleUrls: ['./input-bolos.component.css']
})
export class InputBolosComponent implements OnInit {

  reason;
  status;
  dataLoaded;
  sent;

  constructor(private bolosService: BolosService) { }

  ngOnInit() {
  }

  sendBoloReport(){
    this.bolosService.sendBoloReason(this.reason)
    this.bolosService.dataLoaded.subscribe(data => {
      this.sent = this.bolosService.updateStatus();
      this.reason = "";
    })
  }


}
