import { Component, OnInit } from '@angular/core';
import { datas } from '../datas';

@Component({
  selector: 'app-parentexo4',
  templateUrl: './parentexo4.component.html'
})

export class Parentexo4Component implements OnInit {
  nameValue:string=""
  listPerson : {id :number, first_name: string, last_name : string, email : string, gender : string} [] = datas
  
  constructor() { }

  ngOnInit(): void {
  }

  deleteChild(id:number)
  {
    let index = this.listPerson.findIndex((person) => person.id = id)
    this.listPerson.splice(index,1)
  }

  updateChild(personToUpdate : {id:number, firstName : string})
  {
    let index = this.listPerson.findIndex((person)=> person.id = personToUpdate.id)
    this.listPerson[index].first_name = personToUpdate.firstName
  }
}
