import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { Citizen } from '../models/citizen.model';
import { Observable } from 'rxjs';

@Injectable()
export class MainService {
  constructor(private http:HttpClient){}


  // SELECT u.id, u.firstname, u.lastname, u.sex, u.jailed, u.height, u.dateofbirth, u.job, j.sentence, j.arrestingOfficer  FROM users u, jail j WHERE u.id = j.id AND u.firstName = 'Pedro' AND u.lastName = 'Chupador'

  getCitizenData(firstName, lastName){
    const event = 'FindCitizen';
    const citizenName = {
      firstname:firstName,
      lastname:lastName
    }
    return this.http.post<Citizen>(`http://police_cad/${event}`, citizenName)
    // return this.http.get<Citizen>(json)
  }
}
