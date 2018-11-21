import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { getProp } from '../../../../helpers/helper-functions'

@Component({
  selector: 'app-user-control',
  templateUrl: './user-control.component.html',
  styleUrls: ['./user-control.component.scss']
})
export class UserControlComponent implements OnInit {

  @Output() sort = new EventEmitter<Function>();

  constructor() { }

  ngOnInit() {
  }

  sortBy(...props) {
    this.sort.emit((a,b) => getProp(props, a) > getProp(props, b) ? 1 : -1);
  }
}
