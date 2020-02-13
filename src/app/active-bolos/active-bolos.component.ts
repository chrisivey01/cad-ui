import { BolosService } from '../services/bolos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-active-bolos',
  templateUrl: './active-bolos.component.html',
  styleUrls: ['./active-bolos.component.css']
})
export class ActiveBolosComponent implements OnInit {

  obtainedBolos;
  bolos;
  itemsForDelete = [];
  deletedPopup;
  sent;


  constructor(private bolosService:BolosService) { }

  ngOnInit() {
    this.loadData();

    this.bolosService.dataLoaded.subscribe(()=>{
      this.obtainedBolos = this.bolosService.obtainBoloData();

      for(let bolo of this.obtainedBolos){
        bolo.delete = false;
      }
      this.bolos = this.obtainedBolos;
    })
  }

  loadData(){
    this.bolosService.fetchBoloData();
  }

  slotDelete(i, $event){
    console.log(this.bolos[i])
    console.log(i)

    if(this.bolos[i].delete === false){
      this.bolos[i].delete = true
      this.strikeElement($event.currentTarget, true)
      this.itemsForDelete.push(this.bolos[i])
    }else{
      this.bolos[i].delete = false
      this.strikeElement($event.currentTarget, false)
      this.itemsForDelete.splice(this.itemsForDelete.indexOf(this.bolos[i]),1)
    }
  }

  strikeElement(currentElement, strikeOrNot){
    if(strikeOrNot){
      currentElement.style.textDecoration = "line-through"
    }else{
      currentElement.style.textDecoration = "none"
    }
  }

  removeBolos(){
    this.bolosService.deleteBoloData(this.itemsForDelete)



    this.bolosService.dataLoaded.subscribe(data => {
      this.bolos = this.bolos.filter(bolo =>
        !this.itemsForDelete.some(deletedBolo => bolo.id === deletedBolo.id))

      this.sent = this.bolosService.updateStatus();

    })

    setTimeout(()=> { this.sent = "" }, 5000);
  }
}
