import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twowaybinding2',
  templateUrl: './twowaybinding2.component.html'
})
export class Twowaybinding2Component implements OnInit {

  var1 : boolean = true
  var2 : string = ""
  var3 : number = 0

  login : string = ""
  mdp : string = ""

  constructor() { }

  ngOnInit(): void {
    console.log(this.login)
    console.log(this.mdp)
  }
//test
}
