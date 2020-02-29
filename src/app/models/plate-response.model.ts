import { Plate } from './plate.model';
export interface PlateResponse {
    ssn:number;
    firstname:string;
    lastname:string;
    sex:string;
    jailed:number;
    height:number;
    dateofbirth:string;
    job:string;
    phone_number:string;
    carPlates: Plate[];
  }