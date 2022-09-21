import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PokeapiService {

   baseUrl : string ="https://pokeapi.co/api/v2"
  constructor(private http:HttpClient) {}

  getAll(){
    return this.http.get<any[]>(`${this.baseUrl}/pokemon`)
  }

  getOne(pokeUrl){
    return this.http.get<any>(pokeUrl)
  }
}

