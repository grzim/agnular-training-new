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

  constructor(public usersService: UsersService) {
    this.usersToDisplay = this.usersService.getUsers();
  }


  sort(fn) {
    this.usersToDisplay = [...this.usersService.getUsers()].sort(fn);
  }

  ngOnInit() {
  }

}
