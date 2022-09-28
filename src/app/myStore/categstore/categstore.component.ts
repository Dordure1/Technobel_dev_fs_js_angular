import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICateg } from '../shared/models/ICateg.model';
import { CategmystoreService } from '../shared/services/categmystore.service';

@Component({
  selector: 'app-categstore',
  templateUrl: './categstore.component.html'
})
export class CategstoreComponent implements OnInit {
  listCateg: ICateg[]=[]

  constructor(private categServe : CategmystoreService, private router : Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getDataService()
  }
  
  async getDataService(){
    try {
      this.listCateg = await this.categServe.getData()
    }
    catch(error){
      console.log(error)
    }
  }

  navigateToProductList(categId:number){
    // console.log(categId)
    let current = this.router.url
    console.log(current)

    this.router.navigate([current, categId])
  }
}
