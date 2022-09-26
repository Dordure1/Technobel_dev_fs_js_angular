import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-exos1-calculette',
  templateUrl: './exos1-calculette.component.html'
})
export class Exos1CalculetteComponent implements OnInit {

  nb1 : number = 0
  nb2 : number = 0
  res : number = 0

  constructor() { }

  ngOnInit(): void {
  }

  add()
  {
    this.res = Number(this.nb1) + Number(this.nb2)
    /// demo local Storage 
    localStorage.setItem("lastCalcul", JSON.stringify(this.nb1) + "+" + JSON.stringify(this.nb2) + "=" + JSON.stringify(this.res))
    /// attention que le Local storage ne se supprime pas tout seul
    ////
    this.nb1 = 0
    this.nb2 = 0
  }

  rem(){
    this.res = Number(this.nb1) - Number(this.nb2)
    this.nb1 = 0
    this.nb2 = 0

  } 

  multi(){
    this.res = Number(this.nb1) * Number(this.nb2)
    this.nb1 = 0
    this.nb2 = 0

  }

  div(){
    this.nb2 = (Number(this.nb2) == 0)? 1 : this.nb2
    this.res = Number(this.nb1) / this.nb2
    this.nb1 = 0
    this.nb2 = 0

  }

}
