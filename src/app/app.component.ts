import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'cad-ui';
  toggle = false;
  block = 'block';
  none = 'none';
  // ngOnInit(){
  @HostListener('window:message', ['$event'])
  onMessage(event) {
    this.receiveMessage(event);
  }

  receiveMessage(e){
    if(e.data.openCad === true){
      this.toggle = true;
    } else {
      this.toggle = false;
    }
  }
}

