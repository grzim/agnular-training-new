import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { ProductsService } from '../../../../services/products.service'
import { UsersService } from '../../../../services/users.service'

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  users;

  constructor(private usersService: UsersService) {
    this.users = this.usersService.getUsers();
  }

  ngOnInit() {
  }

}
