import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, mergeMap, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class BieresService {
  private url : string = "http://localhost:3000/"
  constructor( private client : HttpClient) { }

  
  getAll() : Observable<Biere[]> {
    return this.client.get<Biere[]>(this.url+"bieres")
  }

  getDetail(id : number) : Observable<Biere> {
    return this.client.get<Biere>(this.url+"bieres/"+id)
      .pipe(
        mergeMap(
          (b : Biere) => {
              return this.client.get<Categorie>(this.url+"categorie/"+b.idCat)
              .pipe(
                map((c : Categorie) => {
                  b.categorie = c.nom
                  return b
                })
              )
          }
        )
      )
  }

  selected! : Biere
  getFoireu(id : number) {

     this.client.get<Biere>(this.url+"bieres/"+id).subscribe({
      next : (biere : Biere) => {
        this.selected = biere
        this.client.get<Categorie>(this.url+"categorie/"+this.selected.idCat).subscribe({
          next : (c : Categorie) => this.selected.categorie = c.nom
        })
      }
    })
    return this.selected;

  }
}



export interface Biere {
  id : number
  nom : string
  degre : number
  idCat : number
  categorie : string
}

export interface Categorie {
  id : number
  nom : string
}

export interface FullBiere {
  id : number
  nom : string
  degre : number

}