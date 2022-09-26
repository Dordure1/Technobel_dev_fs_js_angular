import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-routage18',
  templateUrl: './routage18.component.html'
})
export class Routage18Component implements OnInit {
  idUser : number = 0

  constructor(private router: Router, private activatedRoute:ActivatedRoute) {}

  ngOnInit(): void {
    console.log("Ng init here")
    console.log(this.activatedRoute)

    if(this.activatedRoute.snapshot.params["id"]){
      this.idUser =Number(this.activatedRoute.snapshot.params["id"])
    }
    console.log(this.idUser);
    
  }

  navigate(){
    this.router.navigate(["demos/routage/42"])// param de route, sera géré par :id dans le routeur
  }
}
