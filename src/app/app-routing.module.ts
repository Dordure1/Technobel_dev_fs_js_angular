import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Binding1Component } from './demos/binding1/binding1.component';
import { Custompipes7Component } from './demos/custompipes7/custompipes7.component';
import { Eventbinding4Component } from './demos/eventbinding4/eventbinding4.component';
import { Exo2pipeComponent } from './demos/exo2pipe/exo2pipe.component';
import { Exos1CalculetteComponent } from './demos/exos1-calculette/exos1-calculette.component';
import { Four0four3Component } from './demos/four0four3/four0four3.component';
import { Propertymodel5Component } from './demos/propertymodel5/propertymodel5.component';
import { Thepipes6Component } from './demos/thepipes6/thepipes6.component';
import { Twowaybinding2Component } from './demos/twowaybinding2/twowaybinding2.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:"", component :HomeComponent},
  {path:"demos/binding", component:Binding1Component},
  {path:"demos/twowaybinding", component:Twowaybinding2Component},
  {path:"demos/four0four", component : Four0four3Component},
  {path:"demos/event", component:Eventbinding4Component},
  {path:"exos/calculette", component : Exos1CalculetteComponent},
  {path:"demos/propertymodel", component : Propertymodel5Component},
  {path:"demos/pipes", component : Thepipes6Component},
  {path:"demos/cpipes", component : Custompipes7Component},
  {path:"demos/exo2pipe", component: Exo2pipeComponent},


  {path:"**", component:Four0four3Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
