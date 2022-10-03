import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BieresService {
  url :string = "http://localhost:3000/"
  constructor(private client : HttpClient) { }


  addBeer(name: string, degree: number , Categ: string ) {
    let biere :addBeer = {nom : name,  degre: degree, idCat: Categ}
      this.client.post<addBeer>(this.url +'bieres',biere).subscribe();
  }
  getAll(){
    this.client.get<addBeer>(this.url +"bieres").subscribe()
  }
}

export interface addBeer{
  nom : string
  degre: number 
  idCat : string
}
