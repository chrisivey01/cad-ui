import { BolosService } from './../../services/bolos.service';
import { Bolo } from './../../models/bolo.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bolos',
  templateUrl: './bolos.component.html',
  styleUrls: ['./bolos.component.css']
})
export class BolosComponent implements OnInit {
  @Input()
  boloReason;
  bolo:Bolo;
  boloList = [];
  value = 'Clear me';

  constructor(private bolosService: BolosService) { }

  ngOnInit(): void {
  }

  submitBolo(){
    this.bolo = {
      checked: false,
      bolo:this.boloReason
    }
    this.boloReason = "";
    this.boloList.push(this.bolo);
    this.bolosService.postBolo(this.bolo).subscribe();
  }

  addBoloToList(index){
    this.boloList[index].checked = !this.boloList[index].checked
  }

  removeBolo(){
    this.boloList = this.boloList.filter(bolos => {
      return bolos.checked === false
    })
  }
}
