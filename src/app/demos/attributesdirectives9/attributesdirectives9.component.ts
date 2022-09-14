import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attributesdirectives9',
  templateUrl: './attributesdirectives9.component.html'
})
export class Attributesdirectives9Component implements OnInit {
isdisabled:boolean=false
textVisible: boolean=true
minForRange:number = 2
maxForRange :number = 4
currentRange:number =50
first : string ="dorian"
last : string ="vanhoutte"
country : string =""


maClass : string = "green-text text-accent-1"
mesClasses : {}= {
  'green-text text-accent-1':true, 
  'lime-text text-lighten-1' :true,
  'deep-orange-text text-lighten-3' : false
}

mesClasses2 : string [] = [
  'hoverable', 
  'left-align',
  'deep-orange lighten-3'

]
mesPropsCss : {} = {'font-size':'25px', 'background-color' : 'black' }

userList :{name : string, gender : string}[] = [
  { name : "dorain" ,gender :"M"},
  { name : "Pierre" ,gender :"M"},
  { name : "Yala" ,gender :"F"},
  { name : "Yolo" ,gender :"F"},
  { name : "EncoreMoi" ,gender :"NC"}
]


  constructor() { }

  ngOnInit(): void {
  }
  reactivateDisabledInput(){
    this.isdisabled =! this.isdisabled

  }
  AfficheText(){
    this.textVisible=! this.textVisible
  }


  getClass(country: string){
    switch (country)
    {
      case "UK":
        return "red darken-3 blue-text text-lighten-1"
      
      case "BE":
        return "yellow-text black"
      case "Ukraine":
        return "lime-text light-blue accent-4"
      
      default : 
        return ""
    }
  }

  setCountry(country:string)
  {
    this.country=country
  }

  colorGender(gender:string)
  {
    switch (gender)
    {
      case "M":
        return 'blue-grey darken-4'
      
        case "F":
          return 'pink darken-4'
      
      default : 
        return 'deep-orange'

    }
  }
}
