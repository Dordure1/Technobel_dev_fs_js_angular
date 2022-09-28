import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import * as M from 'materialize-css'

import { HomeComponent } from './home/home.component';

import { Binding1Component } from './demos/binding1/binding1.component';
import { Twowaybinding2Component } from './demos/twowaybinding2/twowaybinding2.component';


import { NavbarComponent } from './shared/compos/navbar/navbar.component';
import { FooterComponent } from './shared/compos/footer/footer.component';
import { Four0four3Component } from './demos/four0four3/four0four3.component';
import { Eventbinding4Component } from './demos/eventbinding4/eventbinding4.component';
import { Exos1CalculetteComponent } from './demos/exos1-calculette/exos1-calculette.component';
import { Propertymodel5Component } from './demos/propertymodel5/propertymodel5.component';
import { Thepipes6Component } from './demos/thepipes6/thepipes6.component';
import { Custompipes7Component } from './demos/custompipes7/custompipes7.component';
import { PowPipe } from './demos/custompipes7/pow.pipe';
import { Exo2pipeComponent } from './demos/exo2pipe/exo2pipe.component';
import { ConvertisseurdatePipe } from './shared/convertisseurdate.pipe';
import { TempfareneigthPipe } from './shared/tempfareneigth.pipe';
import { InversionNombrePipe } from './shared/inversion-nombre.pipe';
import { ConvertisseurdevisePipe } from './shared/convertisseurdevise.pipe';
import { ConvertisseurnombreenlettrePipe } from './shared/convertisseurnombreenlettre.pipe';
import { Structuraldirectives9Component } from './demos/structuraldirectives9/structuraldirectives9.component';
import { Exo3lesbouclesComponent } from './exos/exo3lesboucles/exo3lesboucles.component';
import { Attributesdirectives9Component } from './demos/attributesdirectives9/attributesdirectives9.component';
import { Attributesdirectivescustom10Component } from './demos/attributesdirectivescustom10/attributesdirectivescustom10.component';
import { RenderDirective } from './demos/attributesdirectivescustom10/render.directive';
import { HightlightDirective } from './shared/directives/highlight.directive';
import { Exos3directivesComponent } from './exos/exos3directives/exos3directives.component';
import { Highlightforexos3Directive } from './shared/directives/highlightforexos3.directive';
import { Exo3onclickDirective } from './shared/directives/exo3onclick.directive';
import { ParentComponent } from './demos/inputOutput/parent/parent.component';
import { ChildComponent } from './demos/inputOutput/child/child.component';
import { Childexo4Component } from './exos/exos4inputoutput/childexo4/childexo4.component';
import { Parentexo4Component } from './exos/exos4inputoutput/parentexo4/parentexo4.component';
import { DiComponent } from './demos/di/di.component';
import { ShopComponent } from './exos/exo5LesServices/shop/shop.component';
import { PanierComponent } from './exos/exo5LesServices/panier/panier.component';
import { ShopviewComponent } from './exos/exo5LesServices/shopview/shopview.component';
import { RefreshpromisesComponent } from './demos/refreshpromises/refreshpromises.component';
import { Asyncawait14Component } from './demos/asyncawait14/asyncawait14.component';
import { Exo6lespromessesComponent } from './exos/exo6lespromesses/exo6lespromesses.component';
import { Httpclients15Component } from './demos/httpclients15/httpclients15.component';
import { Exo7apipersoComponent } from './exos/exo7apiperso/exo7apiperso.component';
import { Guardian16Component } from './demos/guardian16/guardian16.component';
import { Stroage17Component } from './demos/stroage17/stroage17.component';
import { Routage18Component } from './demos/routage18/routage18.component';
import { Routage2part19Component } from './demos/routage2part19/routage2part19.component';
import { CategstoreComponent } from './myStore/categstore/categstore.component';
import { ProductstoreComponent } from './myStore/productstore/productstore.component';
import { ProductdetailsstoreComponent } from './myStore/productdetailsstore/productdetailsstore.component';

M.AutoInit()


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    Binding1Component,
    Twowaybinding2Component,
    Four0four3Component,
    Eventbinding4Component,
    Exos1CalculetteComponent,
    Propertymodel5Component,
    Thepipes6Component,
    Custompipes7Component,
    PowPipe,
    Exo2pipeComponent,
    ConvertisseurdatePipe,
    TempfareneigthPipe,
    InversionNombrePipe,
    ConvertisseurdevisePipe,
    ConvertisseurnombreenlettrePipe,
    Structuraldirectives9Component,
    Exo3lesbouclesComponent,
    Attributesdirectives9Component,
    Attributesdirectivescustom10Component,
    RenderDirective,
    HightlightDirective,
    Exos3directivesComponent,
    Highlightforexos3Directive,
    Exo3onclickDirective,
    ParentComponent,
    ChildComponent,
    Childexo4Component,
    Parentexo4Component,
    DiComponent,
    ShopComponent,
    PanierComponent,
    ShopviewComponent,
    RefreshpromisesComponent,
    Asyncawait14Component,
    Exo6lespromessesComponent,
    Httpclients15Component,
    Exo7apipersoComponent,
    Guardian16Component,
    Stroage17Component,
    Routage18Component,
    Routage2part19Component,
    CategstoreComponent,
    ProductstoreComponent,
    ProductdetailsstoreComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
