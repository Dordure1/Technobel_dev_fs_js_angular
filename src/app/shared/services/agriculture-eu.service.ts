import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { getLocaleDateFormat } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AgricultureEUService {
  baseUrl : string = "https://www.ec.europa.eu/agrifood/api"
  constructor(private http: HttpClient) { 
  }

  getData(url:string){
    return this.http.get<any>(`https://ec.europa.eu/agrifood/api/beef/prices?memberStateCodes=PT&years=2019,2020&months=1,3,9&weeks=5,6,7,8,40,41,42&beginDate=01/09/2019&endDate=02/02/2020&carcassCategories=heifers,cows`)
  }
}
