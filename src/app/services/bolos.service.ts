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
}