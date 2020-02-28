import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FinesService {
    constructor(private http: HttpClient) { }
   
    postFinesData(finesData){
        const event = 'FineCitizen';
        return this.http.post(`http://police_cad/${event}`, finesData)
    }
}