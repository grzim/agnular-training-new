import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() propertyToShow: string;
  @Input() items: Array<any>;
  @Output() itemClicked = new EventEmitter<{item: any, index: number}>();
  constructor() { }

  ngOnInit() {
  }

}
