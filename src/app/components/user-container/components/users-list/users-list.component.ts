import { Component, OnInit } from '@angular/core'
import { UsersService } from '../../../../services/users.service'
import { Router } from '@angular/router'
import { outlets } from '../../../../router/app-routing.module'

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  users;
  constructor(private router: Router,
              private usersService: UsersService,) {
    this.users = this.usersService.getUsers()
  }

  navigateTo({index}) {
    this.router.navigate([
      {
        outlets: {
          [outlets.userDetails]: [index]
        }
      }
    ])
  }

  ngOnInit(){}
}
