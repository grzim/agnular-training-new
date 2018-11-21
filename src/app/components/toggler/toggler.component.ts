import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggler',
  templateUrl: './toggler.component.html',
  styleUrls: ['./toggler.component.scss']
})
export class TogglerComponent implements OnInit {

  isVisible = true;
  toggle() {
    this.isVisible = !this.isVisible;
  }
  constructor() { }

  ngOnInit() {
  }

}
