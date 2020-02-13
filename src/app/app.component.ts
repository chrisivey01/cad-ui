import { Component, HostListener } from '@angular/core';
import { Key } from 'readline';
import Nui from './util/Nui';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'cad-ui';
  toggle = true;
  block = 'block';
  none = 'none';
  // ngOnInit(){

  @HostListener('window:message', ['$event'])
  onMessage(event) {
    this.receiveMessage(event);
  }

  @HostListener('document:keydown', ['$event'])
  onKeyDown(event:KeyboardEvent){
    if (event.keyCode === 27) {
      Nui.send('CloseUI');
    }
  }

  receiveMessage(e){
    if(e.data.openCad === true){
      this.toggle = true;
    }
    // else {
    //   this.toggle = false;
    // }
  }
}

