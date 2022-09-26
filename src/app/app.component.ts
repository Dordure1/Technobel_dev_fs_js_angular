import { Component } from '@angular/core';
import { FakeloginService } from './shared/services/fakelogin.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  isConnected:boolean = false
  constructor(private fakeLoginService : FakeloginService){
    this.fakeLoginService.refresh()
  }

}
