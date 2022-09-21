import { Component, OnInit } from '@angular/core';
import { PokeapiService } from 'src/app/shared/services/pokeapi.service';

@Component({
  selector: 'app-httpclients15',
  templateUrl: './httpclients15.component.html'
})
export class Httpclients15Component implements OnInit {
  pokeList: {name:string, url:string}[] = []
  
 pokeDetails : {
  name:string, 
  type : any[],
  stat:any[]
} = {
  name:"", 
  type:[],
  stat:[]}
  
  constructor(private pokeapi : PokeapiService) { }

  ngOnInit(): void {
    
    this.pokeapi.getAll().subscribe((res:any)=>{
      console.log(res)
     this.pokeList = res.results
    })
  }
  goToDetails(poketUrl : string){
    this.pokeapi.getOne(poketUrl).subscribe((res:any)=>{
      this.pokeDetails.name = res.name
      this.pokeDetails.type = res.types
      this.pokeDetails.stat = res.stats
    })
  }

}
