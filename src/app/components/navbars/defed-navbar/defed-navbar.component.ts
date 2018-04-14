import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'defed-navbar',
  templateUrl: './defed-navbar.component.html',
  styleUrls: ['./defed-navbar.component.scss'],
  inputs: []
})
export class DefedNavbarComponent implements OnInit {

  isExpanded = false;

  constructor() { }

  ngOnInit() {
  }

}
