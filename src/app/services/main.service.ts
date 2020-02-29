import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { Citizen } from '../models/citizen.model';

@Injectable()
export class MainService {
  constructor(private http:HttpClient){}

  getCitizenData(ssn){
    const event = 'FindCitizen';

    return this.http.post<Citizen>(`http://police_cad/${event}`, ssn)
  }
}
