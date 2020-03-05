import { BoloDeletes } from './../../models/bolo-deletes.model';
import { BoloList } from './../../models/bolo-list.model';
import { BolosService } from './../../services/bolos.service';
import { Bolo } from './../../models/bolo.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bolos',
  templateUrl: './bolos.component.html',
  styleUrls: ['./bolos.component.css']
})
export class BolosComponent implements OnInit {
  boloReason;
  bolo:Bolo;
  boloList;
  removedBolos = [];
  value = 'Clear me';
  boloDeletes:BoloDeletes;

  constructor(private bolosService: BolosService) { }

  ngOnInit(): void {
    this.bolosService.getBolo().subscribe(res => {
      this.boloList = res
    })
  }

  submitBolo(){
    this.bolo = {
      checked: false,
      reason: this.boloReason,
      start: new Date()
    }
    this.boloReason = "";
    this.boloList.push(this.bolo);
    this.bolosService.postBolo(this.bolo).subscribe();
  }

  addBoloToList(index){
    this.boloList[index].checked = !this.boloList[index].checked
  }

  removeBolo(){
    this.removedBolos = this.boloList.filter(bolos => bolos.checked)
    this.bolosService.removeBolos(this.removedBolos)
    .subscribe(data => {
      this.boloList = data;
    })
  }
}
