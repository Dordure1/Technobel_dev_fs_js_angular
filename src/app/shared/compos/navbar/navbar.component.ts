import { Component, OnInit } from '@angular/core';
import { FakeloginService } from '../../services/fakelogin.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    let  elems = document.querySelectorAll('.dropdown-trigger');
    M.Dropdown.init(elems)


  }

}
