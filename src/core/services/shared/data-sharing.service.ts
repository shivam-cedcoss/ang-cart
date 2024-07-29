import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {
  constructor() { };
  cateId=0;
  getCategoryId(id:number){
    this.cateId = id;
  } 
}
