import { Component, Input, OnInit } from '@angular/core'
import { User } from '../../../../helpers/classes/user'
import { getValuesOf } from '../../../../helpers/helper-functions'

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

  getLineFor(user) {
    const length = this.getValueOf(user).reduce((acc, curr) => (acc = acc + String(curr).length, acc), 0);
    return [...this.getValueOf(user), length];
  }

  getValueOf(obj) {
    return getValuesOf(obj);
  }

  getNames(obj, prefix = '') {
    return (Object.keys(obj).map(key => (typeof obj[key] === "object") ? this.getNames(obj[key], key + ' ') : prefix + key) as any).flat();
  }
}
