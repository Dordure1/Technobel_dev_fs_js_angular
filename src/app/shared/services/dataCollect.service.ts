import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { getLocaleDateFormat } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class dataCollectServices {
  baseUrl : string = "http://localhost:3000/dataset"
  constructor(private http: HttpClient) { 
  }

  getData(url:string){
    return this.http.get<any>(`${this.baseUrl}${url}`)
  }

}
