import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structuraldirectives9',
  templateUrl: './structuraldirectives9.component.html'
})
export class Structuraldirectives9Component implements OnInit {

  opened:boolean=false
  datasList : string[] = ["Pommes","Poires","Bananes","Oranges"]
  
  userList : { name:string ,role :string}[] = [
    {name:"dorian", role:"admin"},
    {name:"jawad", role: "modérateur"},
    {name:"Camille", role:"casu"}

  ]


  product:{} = {name : "un truc", proce :15 , desc :"tutu"}

  constructor() { }

  ngOnInit(): void {
  }
  triggerParagraphe(){
    this.opened = !this.opened
  }
}
