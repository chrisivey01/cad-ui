import { CadSystemService } from '../../services/cad-system.service';
import { Component, OnInit, HostListener } from '@angular/core';
import Nui from '../../util/Nui';

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

  @HostListener('window:keyup', ['$event'])
  handleKeyDown(event:KeyboardEvent){
    if(event.keyCode === 27 || event.keyCode === 113) {
      Nui.send('CloseUI');
    }
  }

  loadData(){
    this.cadSystemService.fetchArrestData(this.citizensName);
  }
}
