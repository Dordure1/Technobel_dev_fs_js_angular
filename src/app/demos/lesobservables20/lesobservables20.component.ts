import { Component, OnInit } from '@angular/core';
import { delay, map, of, tap } from 'rxjs';
import { Biere, BieresService } from './services/bieres.service';
import { FakeauthService } from './services/fakeauth.service';

@Component({
  selector: 'app-lesobservables20',
  templateUrl: './lesobservables20.component.html',
})

export class Lesobservables20Component implements OnInit {
  isConnected! : boolean
  liste : any[] = []
  constructor(private service : FakeauthService, private service2 : BieresService) { }

  list! : Biere[]
  selected! : Biere

  ngOnInit(): void {

    this.service.connectionSubject.subscribe({
      next : (data : boolean) => this.isConnected = data,
      error : (error) => console.log(error),
      complete : () => console.log("j'ai fini")
    })

    /// demo 2
    const listeObs = of([
      {id : 1, lastname : 'Pendragon', firstname : 'Arthur', role : 'roi'},
      {id : 2, lastname : 'Enchanteur', firstname : 'Merlin', role : 'druide'},
      {id : 3, lastname : 'De Galles', firstname : 'Perceval', role : 'chevalier'},
      {id : 4, lastname : 'De Carmélide', firstname : 'Leodagan', role : 'chevalier'},
    ])

    listeObs.pipe(
      tap((x : any[]) => {
        this.liste = x
        console.log(x)
      }),
      delay(3000),
      tap(() => {console.log("après 3 secondes")}),
      map((x : any[]) => x.filter(x => x.role == 'chevalier'))
    ).subscribe(
      (x => this.liste = x)
    )
    /// demo 3 

    this.service2.getAll().pipe(
      map((x : Biere[]) => x.filter(b => b.idCat == 1) )
    ).subscribe({
      next : (data : Biere[]) => {
        this.list = data
      }
    })
  }

  login(){
    this.service.login()
  }
  logout(){
    this.service.logout()
  }


  getById(id : number){
    this.selected = this.service2.getFoireu(id)
    // this.service.getDetail(id).subscribe({
    //   next : (b : Biere) => this.selected = b
    // })
  }
}
