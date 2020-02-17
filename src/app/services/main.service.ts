import { Injectable } from '@angular/core'
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CitizensRequest } from '../models/citizens.request';
import json from '../json/player.json';
@Injectable()
export class MainService {

  constructor(private http:HttpClient){}

  getCitizenData(citizensRequest:CitizensRequest){
    return this.http.post("json",citizensRequest)
  }

}
