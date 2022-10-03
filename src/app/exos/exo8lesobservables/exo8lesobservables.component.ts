import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BieresService } from './services/bieres.service';

@Component({
  selector: 'app-exo8lesobservables',
  templateUrl: './exo8lesobservables.component.html'
})
export class Exo8lesobservablesComponent implements OnInit {

  beerName! : string 
  beerDegree! : number
  beerCateg!: string 

  list : {name:string, degre:number, categorie: string} [] = []
  
  constructor(private beerService : BieresService, private client : HttpClient) {}

  ngOnInit(): void {
  }

  addBeer(name:string, degree:number, Categ: string){ 
    this.beerService.addBeer(name, degree, Categ)
  }

}
