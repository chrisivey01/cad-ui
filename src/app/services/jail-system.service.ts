import { Injectable } from '@angular/core'
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class JailSystemService {

    arrestData;
    dataLoaded = new Subject<void>();
    sent;

    constructor(private httpClient: HttpClient) { }

    sendJailDetails(jailData) {
        this.httpClient.post("http://18.209.63.46:8080/jail-data/", jailData)
            .subscribe(data => {
                this.arrestData = data;
                this.sent = "Jail Information entered."
                this.dataLoaded.next();           
            })
    }
    
    obtainArrestData(){
        return this.arrestData;
    }

    updateStatus(){
        return this.sent
    }
}