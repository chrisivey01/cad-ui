import { TopOfficerService } from './../../services/top-officers.service';
import { TopOfficer } from './../../models/top-officer.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Component, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-top-officers',
  templateUrl: './top-officers.component.html',
  styleUrls: ['./top-officers.component.css']
})
export class TopOfficersComponent implements AfterViewInit{
  displayedColumns: string[] = ['name', 'jail']
  dataSource: MatTableDataSource<TopOfficer>;

  resultsLength = 0;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private topOfficerService:TopOfficerService) { }

  ngAfterViewInit(): void {
    this.topOfficerService.getOfficers().subscribe((result) => {
      this.dataSource = new MatTableDataSource<TopOfficer>(result[0].officers)
      this.dataSource.filterPredicate = (data: TopOfficer, filter) => {
        const dataFilter = JSON.stringify(data).toLowerCase();
        return dataFilter.indexOf(filter) != -1;
      }
      this.resultsLength = result[0].total_count[0].total_count
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
