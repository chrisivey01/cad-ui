import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TopOfficerList } from './../models/top-officer-list.model';
import { Observable } from 'rxjs';
import { stringify } from 'querystring';

@Injectable({
    providedIn: 'root'
})
export class TopOfficerService {
    constructor(private http: HttpClient){}

    getOfficers(){
        const event = 'TopOfficers'

        return this.http.post<TopOfficerList>(`http://police_cad/${event}`, {})
    }
}