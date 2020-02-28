import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';

@Injectable()
export class JailService {
    firstName;
    lastName
    reasons;

    constructor(private http: HttpClient) { }
   
    postJailData(jailData){
        const event = 'JailCitizen';
        return this.http.post(`http://police_cad/${event}`, jailData)
    }
}