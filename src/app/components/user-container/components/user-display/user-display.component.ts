import { Component, Input, OnInit } from '@angular/core'
import { User } from '../../../../helpers/classes/user'

@Component({
  selector: 'app-user-display',
  templateUrl: './user-display.component.html',
  styleUrls: ['./user-display.component.scss']
})
export class UserDisplayComponent implements OnInit {

  @Input() users: Array<User>;
  constructor() { }

  ngOnInit() {
  }

  getValueOf(obj) {
    return (Object.keys(obj).map(key => (typeof obj[key] === "object") ? this.getValueOf(obj[key]) : obj[key]) as any).flat();
  }
}
