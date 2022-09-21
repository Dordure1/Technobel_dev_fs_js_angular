import { Component, OnInit } from '@angular/core';
import { AgricultureEUService } from 'src/app/shared/services/agriculture-eu.service';

@Component({
  selector: 'app-exo7apiperso',
  templateUrl: './exo7apiperso.component.html'
})
export class Exo7apipersoComponent implements OnInit {
  test :any =undefined

  constructor(private EUagri : AgricultureEUService) { }

  ngOnInit(): void {
  this.test = this.EUagri.getData(`/beef/prices?memberStateCodes=PT&years=2019,2020&months=1,3,9&weeks=5,6,7,8,40,41,42&beginDate=01/09/2019&endDate=02/02/2020&carcassCategories=heifers,cows`).subscribe((res:any)=>{
    console.log(res)
    console.log(this.test)
  })
  }
  
}
