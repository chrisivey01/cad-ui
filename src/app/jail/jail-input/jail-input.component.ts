import { JailSystemService } from './../../jail-system.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jail-input',
  templateUrl: './jail-input.component.html',
  styleUrls: ['./jail-input.component.css']
})
export class JailInputComponent implements OnInit {

  citizenName;
  arrestingOfficer;
  reasonArrest;
  status;

  constructor(private jailSystemService: JailSystemService) { }

  ngOnInit() {
  }


  sendJailReport(){
    const obj = {
      playerName: this.citizenName,
      arrestingOfficer: this.arrestingOfficer,
      reason: this.reasonArrest
    }
    this.jailSystemService.sendJailDetails(obj)
    this.status = this.jailSystemService.updateStatus();
  }
}
