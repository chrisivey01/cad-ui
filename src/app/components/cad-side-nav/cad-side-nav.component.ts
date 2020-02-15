import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cad-side-nav',
  templateUrl: './cad-side-nav.component.html',
  styleUrls: ['./cad-side-nav.component.css']
})
export class CadSideNavComponent implements OnInit {

  links = [
    {
      label:"Citizen Information",
      path:"/"
    },
    {
      label:'Jail',
      path:"/jail/jail-info"
    },
    {
      label:'Active BOLOs',
      path:"/active-bolos"
    },
    {
      label:'Input BOLOs',
      path:"/input-bolos"
    },
    {
      label:'Warrants',
      path:"/warrants"
    }

      
    ]
  constructor() { }

  ngOnInit(): void {
  }

}
