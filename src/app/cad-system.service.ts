import { Injectable } from '@angular/core'
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CadSystemService {

    arrestData;
    dataLoaded = new Subject<void>();

    constructor(private httpClient: HttpClient) { }

    fetchArrestData(name) {
        this.httpClient.get("http://18.209.63.46:8080/citizens-record/" + name)
            .subscribe(data => {
                this.arrestData = data;
                this.dataLoaded.next();
            })
    }
    
    obtainArrestData(){
        return this.arrestData;
    }
}