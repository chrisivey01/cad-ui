import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { Citizen } from '../models/citizen.model';
import { Observable } from 'rxjs';

@Injectable()
export class MainService {
  constructor(private http:HttpClient){}

  getCitizenData(firstName, lastName){
    const event = 'FindCitizen';
    const citizenName = {
      firstname:firstName,
      lastname:lastName
    }
    return this.http.post<Citizen>(`http://police_cad/${event}`, citizenName)
  }
}
