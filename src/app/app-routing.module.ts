import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Attributesdirectives9Component } from './demos/attributesdirectives9/attributesdirectives9.component';
import { Attributesdirectivescustom10Component } from './demos/attributesdirectivescustom10/attributesdirectivescustom10.component';
import { Binding1Component } from './demos/binding1/binding1.component';
import { Custompipes7Component } from './demos/custompipes7/custompipes7.component';
import { Eventbinding4Component } from './demos/eventbinding4/eventbinding4.component';
import { Exo2pipeComponent } from './demos/exo2pipe/exo2pipe.component';
import { Exos1CalculetteComponent } from './demos/exos1-calculette/exos1-calculette.component';
import { Four0four3Component } from './demos/four0four3/four0four3.component';
import { ParentComponent } from './demos/inputOutput/parent/parent.component';
import { Propertymodel5Component } from './demos/propertymodel5/propertymodel5.component';
import { Structuraldirectives9Component } from './demos/structuraldirectives9/structuraldirectives9.component';
import { Thepipes6Component } from './demos/thepipes6/thepipes6.component';
import { Twowaybinding2Component } from './demos/twowaybinding2/twowaybinding2.component';
import { Exo3lesbouclesComponent } from './exos/exo3lesboucles/exo3lesboucles.component';
import { Exos3directivesComponent } from './exos/exos3directives/exos3directives.component';
import { HomeComponent } from './home/home.component';
import {Parentexo4Component} from './exos/exos4inputoutput/parentexo4/parentexo4.component'
import { DiComponent } from './demos/di/di.component';
import { ShopviewComponent } from './exos/exo5LesServices/shopview/shopview.component';

const routes: Routes = [
  {path:"", component :HomeComponent},
  {path : "demos", children : [
    {path:"binding", component:Binding1Component},
    {path:"twowaybinding", component:Twowaybinding2Component},
    {path:"four0four", component : Four0four3Component},
    {path:"event", component:Eventbinding4Component},
    {path:"propertymodel", component : Propertymodel5Component},
    {path:"pipes", component : Thepipes6Component},
    {path:"cpipes", component : Custompipes7Component},
    {path:"exo2pipe", component: Exo2pipeComponent},
    {path: "strdirectives", component:Structuraldirectives9Component},
    {path: "attributedirectives", component : Attributesdirectives9Component},
    {path: "attributescustom", component: Attributesdirectivescustom10Component},
    {path: "inputOutput" , component: ParentComponent},
    {path:"di", component:DiComponent},
  ]},
  {path: "exos", children :[
    {path:"calculette", component : Exos1CalculetteComponent},
    {path: "exos3lesboucles", component: Exo3lesbouclesComponent},
    {path:"exos3lesdirectives", component : Exos3directivesComponent},
    {path: "exos4inputoutput", component:Parentexo4Component},
    {path:"shop", component:ShopviewComponent}
  ]},

  {path:"**", component:Four0four3Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
