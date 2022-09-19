import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-childexo4',
  templateUrl: './childexo4.component.html'
})
export class Childexo4Component implements OnInit {
  newUserName:string =""
  triggerUpdateName : boolean = false
  
  @Input() id_person : number = 0
  @Input() firstName_person : string = ""
  @Input() lastName_person : string =""
  @Input() email_person : string ="" 
  @Input() gender_person :string =""

  @Output() childDelete :EventEmitter<number> = new EventEmitter<number>()
  @Output() childUpdate : EventEmitter<{id : number, firstName : string}> = new EventEmitter<{id : number, firstName : string}>()


  constructor() {

    let tutu : Event = null
  }

  ngOnInit(): void {
  }

  deleteUser(id_user:number)
  {
    this.childDelete.emit(id_user)
  }

  updateUser(firstName_user : string){
    firstName_user = this.newUserName
    this.triggerUpdateName = !this.triggerUpdateName
 }
 update(id_user : number){
  this.childUpdate.emit({id : id_user, firstName : this.newUserName})
  this.triggerUpdateName = !this.triggerUpdateName
 }

 cancelUpdate(){
  this.triggerUpdateName = !this.triggerUpdateName
 }


 updateLoic(updateName : string){
  console.log(updateName)
}


}
