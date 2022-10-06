import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeServiceService {

  private baseUrl : string = "https://pokeapi.co/api/v2/pokemon"
  constructor(private httpC : HttpClient) { }


  getAll() : Observable<any>{
    return this.httpC.get<any>(this.baseUrl).pipe(map(x => x.results))
}


getDetails(urlDetails : string) : Observable<any>{
    return this.httpC.get<any>(urlDetails).pipe(map(x => x.sprites))
}
}
