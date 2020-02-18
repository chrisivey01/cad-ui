import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { Citizens } from '../models/citizens.model';
import { Observable } from 'rxjs';

@Injectable()
export class MainService {
  constructor(private http:HttpClient){}


  // SELECT u.id, u.firstname, u.lastname, u.sex, u.jailed, u.height, u.dateofbirth, u.job, j.sentence, j.arrestingOfficer  FROM users u, jail j WHERE u.id = j.id AND u.firstName = 'Pedro' AND u.lastName = 'Chupador'

  getCitizenData(firstName, lastName): Observable<Citizens>{
    const event = 'FindCitizen';
    const citizensName = {
      firstname:firstName,
      lastname:lastName
    }
    console.log('here')
    return this.http.post<Citizens>(`http://police_cad/${event}`, citizensName)
  }
}
