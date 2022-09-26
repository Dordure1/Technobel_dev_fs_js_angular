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
  navigateCateg(){
    this.router.navigate(["categ"])
  }

  navigateListProduct(){
    this.router.navigate(["categ",12,"product"])

  }

  navigateProduct(){
    this.router.navigate(["categ", this.activatedRoute.snapshot.params["idCateg"],"product"])
  }
  
  navigateProductDetails(){
    this.router.navigate(["categ", this.activatedRoute.snapshot.params["idCateg"],"product"], this.activatedRoute.snapshot.params["idProducts"])
    
    /// avec options 
    /// gestion des options ?=& ?oder=Desc&limit=25
    this.router.navigate(["categ", this.activatedRoute.snapshot.params["idCateg"],
    "product", 
    this.activatedRoute.snapshot.params["idProducts"],"details"], {queryParams:{"order":"desc", "limit":"20"}})
  }


}
