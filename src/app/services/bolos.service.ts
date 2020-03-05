import { BoloList } from './../models/bolo-list.model';
import { Bolo } from './../models/bolo.model';
import { Injectable } from '@angular/core'
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BolosService {
    constructor(private http: HttpClient) { }
   
    getCount(){
        const event = 'BoloCount';
        return this.http.post(`http://police_cad/${event}`, {})
    }

    postBolo(bolo){
        const event = 'PostBolo'
        return this.http.post(`http://police_cad/${event}`, bolo)
    }

    removeBolos(deleted){
        const event = 'RemoveBolos'
        return this.http.post(`http://police_cad/${event}`, deleted)
    }

    getBolo(){
        const event = 'GetBolos'
        return this.http.post<BoloList>(`http://police_cad/${event}`, {})
    }
}