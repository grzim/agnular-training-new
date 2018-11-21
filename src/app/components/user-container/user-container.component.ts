import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service'
import { getProp } from '../../helpers/helper-functions'


@Component({
  selector: 'app-user-container',
  templateUrl: './user-container.component.html',
  styleUrls: ['./user-container.component.scss']
})
export class UserContainerComponent implements OnInit {
  public usersToDisplay;

  constructor(private usersService: UsersService) {
    this.usersToDisplay = this.usersService.getUsers();
  }

  getValueOf(obj) {
    return (Object.keys(obj).map(key => (typeof obj[key] === "object") ? this.getValueOf(obj[key]) : obj[key]) as any).flat();
  }


  sortBy(...props) {
    this.usersToDisplay = [...this.usersService.getUsers()].sort((a,b) => getProp(props, a) > getProp(props, b) ? 1 : -1);
  }

  ngOnInit() {
  }

}
