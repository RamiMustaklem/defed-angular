import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'defed-toolbar',
  templateUrl: './defed-toolbar.component.html',
  styleUrls: ['./defed-toolbar.component.scss'],
  inputs: ['title']
})
export class DefedToolbarComponent implements OnInit {
  title: string = "";

  constructor() { }

  ngOnInit () {
    if (!this.title) {
      this.title = "DEFED Angular";
    }
  }
}
