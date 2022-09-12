import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exo2pipe',
  templateUrl: './exo2pipe.component.html'
})
export class Exo2pipeComponent implements OnInit {

  nb1 :number = 0
  country : string

  constructor() { }

  ngOnInit(): void {
  }
  convertion(country:string)
  {
    this.country = country
  }

}
