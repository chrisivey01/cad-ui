import { Component, HostListener } from '@angular/core';
import Nui from './util/Nui';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  opened: boolean;
  title = 'cad-ui';
  toggle = false;
  block = 'block';
  none = 'none';

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
    } else {
      this.toggle = false;
    }
  }
}
