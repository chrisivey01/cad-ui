import { Injectable } from '@angular/core'
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BolosService {

    sent;
    boloData;
    dataLoaded = new Subject<void>();

    constructor(private httpClient: HttpClient) { }

    fetchBoloData() {
        this.httpClient.get("http://18.209.63.46:8080/all-bolos")
            .subscribe(data => {
                this.boloData = data;
                this.dataLoaded.next();
        })
    }
    
    obtainBoloData(){
        return this.boloData;
    }

    sendBoloReason(boloReason){
        const bolo = {
            active: 1,
            reason: boloReason,
        }
        this.httpClient.post("http://18.209.63.46:8080/insert-bolo/", bolo)
            .subscribe(data =>{
                this.sent = "BOLO activated!"
                console.log("data sent", data)
            }, 
            error => {
                this.sent = "Error with BOLO contact government!"
                console.log(error)
            });    
    }


    updateStatus(){
        return this.sent
    }


    deleteBoloData(deletedBolos){
        this.httpClient.post("http://18.209.63.46:8080/delete-bolos/", deletedBolos)
        .subscribe(data => {
            this.sent = "BOLO(s) deleted."
        },
        error => {
            this.sent = "Error with BOLO contact government!"
        });
    }
}