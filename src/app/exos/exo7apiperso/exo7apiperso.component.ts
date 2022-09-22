import { Component, OnInit } from '@angular/core';
import { dataCollectServices } from 'src/app/shared/services/dataCollect.service';

@Component({
  selector: 'app-exo7apiperso',
  templateUrl: './exo7apiperso.component.html'
})
export class Exo7apipersoComponent implements OnInit {
  moisSelected :string = ""
  anneeSelected:string=""
  regionSelected:string=""
  typeDechetsSelected:string=""



  myDataCollect : {date:string,nomSection:string,dechets:string,region:string}[] =[]
  urlLimit:string="?_start=20&_end=30"
  searchUrl:string=""
  searchUrlStart:string="?"
  allYearsTable : {year : number}[] = []
  allRegionTable :{name:string} [] = []
  allRubbishTable: {name:string} []=[]


  constructor(private dataCollect : dataCollectServices) { }

  ngOnInit(): void {
  this.dataCollect.getData("").subscribe((res:any)=>{
    console.log(res)
    res.forEach((element :any) => {
      /// trouver toutes les régions de la db
      if(!this.allRegionTable.includes(element.fields.nomcommune)){
        this.allRegionTable.push(element.fields.nomcommune) 
      }

      /// trouver les années de la base de données
      if(!this.allYearsTable.includes(element.fields.annee)){
        this.allYearsTable.push(element.fields.annee)
      }

      if(!this.allRubbishTable.includes(element.fields.libelledechet)){
        this.allRubbishTable.push(element.fields.libelledechet)
      }
        
        
    });
  })

  } 

  checkResult(mois:string,annee:string,region:string,dechets:string){
    this.myDataCollect=[]
    
    if(mois)
    {
      this.searchUrl=`fields.mois=${mois}`
    }
    if(annee)
    {if(this.searchUrl)
      {
        this.searchUrl=this.searchUrl+"&"
      }
      this.searchUrl=this.searchUrl+`fields.annee=${annee}`
    }
    if(region)
    {
      if(this.searchUrl){
        this.searchUrl=this.searchUrl+"&"
      }
      this.searchUrl=this.searchUrl+`fields.nomcommune=${region}`
    }
    if(dechets)
    {
      dechets = dechets.replace('&',"%26")

      if(this.searchUrl){
        this.searchUrl=this.searchUrl+"&"
      }
      this.searchUrl=this.searchUrl+`fields.libelledechet=${dechets}`
    }

    this.searchUrl = this.searchUrlStart+this.searchUrl

    this.dataCollect.getData(this.searchUrl).subscribe((res:any)=>{
      console.log(res)
      res.forEach((element:any)=>{
        this.myDataCollect.push({date:element.fields.datetournee, nomSection:element.fields.nomsection ,dechets:element.fields.libelledechet, region: element.fields.nomcommune}) 
      })
      
      // console.log(this.myDataCollect)
    })
  

  }

  
}
