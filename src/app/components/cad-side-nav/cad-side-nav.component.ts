import { BolosService } from './../../services/bolos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cad-side-nav',
  templateUrl: './cad-side-nav.component.html',
  styleUrls: ['./cad-side-nav.component.css']
})
export class CadSideNavComponent implements OnInit {
  boloCount$;

  links = [
    {
      label:"Citizen Information",
      path:"/"
    },
    {
      label:'Jail',
      path:"/jail"
    },
    {
      label:'Fines',
      path:"/fines"
    },
    {
      label:'Plate Searcher',
      path:"/plate-searcher"
    },
    {
      label:'BOLOs',
      path:"/bolos"
    },
    {
      label:'Top Officers',
      path:"/top-officers"
    }
  ]

  constructor(private boloService: BolosService) { }

  ngOnInit(): void {
    this.boloService.getCount().subscribe(count => this.boloCount$ = count);
  }

  obtainCount(){
    this.boloService.getCount().subscribe(count => this.boloCount$ = count);
  }
}
