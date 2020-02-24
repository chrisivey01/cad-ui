import { Jails } from './jails.models';
export interface Citizen {
  firstname:string;
  lastname:string;
  sex:string;
  jailed:number;
  height:number;
  dateofbirth:string;
  job:string;
  phone_number:string;
  jails: Jails[];
}
