import { PlateResponse } from './../models/plate-response.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlateService {
  constructor(private http:HttpClient) { }

  getPlateData(plate){
    const event = 'PlateCitizen'

    return this.http.post<PlateResponse>(`http://police_cad/${event}`, plate)
  }
}
