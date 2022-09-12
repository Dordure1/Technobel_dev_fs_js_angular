import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
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
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
