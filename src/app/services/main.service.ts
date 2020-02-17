import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { Citizens } from '../models/citizens.model';
import data from '../json/player.json';
import { Observable } from 'rxjs';

@Injectable()
export class MainService {
  json = data;

  constructor(private http:HttpClient){}

  getCitizenData(citizensRequest): Observable<Citizens>{
    return this.http.post<Citizens>(this.json, citizensRequest)
  }

}
