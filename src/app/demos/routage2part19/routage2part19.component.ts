import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-routage2part19',
  templateUrl: './routage2part19.component.html'
})
export class Routage2part19Component implements OnInit {

  constructor(private router : Router, private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.activatedRoute);
    
  }

}
