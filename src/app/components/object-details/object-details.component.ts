import { Component, Input, OnInit } from '@angular/core'
import { getValuesOf } from '../../helpers/helper-functions'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-object-details',
  templateUrl: './object-details.component.html',
  styleUrls: ['./object-details.component.scss']
})
export class ObjectDetailsComponent implements OnInit {

  @Input() items;
  item;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      ({id}) => this.item = this.items[id]
    )
  }

  getValuesOf(obj) {
    return getValuesOf(obj);
  }
}
