import { Component, OnInit } from '@angular/core';
import { PromiseDemo14AsyncAwaitService } from 'src/app/shared/services/promise-demo14-async-await.service';

@Component({
  selector: 'app-asyncawait14',
  templateUrl: './asyncawait14.component.html',
})
export class Asyncawait14Component implements OnInit {
  text:string="hello all"
  message:string=""
  constructor(private refreshpromisesAsyncAwait : PromiseDemo14AsyncAwaitService) { }

  ngOnInit(): void { 
    let result = this.refreshpromisesAsyncAwait.transformText(this.text)
    .then((res)=>{
      console.log(res)
    })
    .catch((error)=>{
      console.log(error)
    })
  }

}
