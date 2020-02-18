import { Component, OnInit, EventEmitter, Output, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }
@ViewChild("navbar",{static:true}) navbar:ElementRef;
@Output() emiter = new EventEmitter<ElementRef>();

  ngOnInit() {
    this.emiter.emit(this.navbar);
  }

}
