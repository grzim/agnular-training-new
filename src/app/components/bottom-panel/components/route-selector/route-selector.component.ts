import { Component, OnInit } from '@angular/core'
import { UsersService } from '../../../../services/users.service'
import { ProductsService } from '../../../../services/products.service'
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-route-selector',
  templateUrl: './route-selector.component.html',
  styleUrls: ['./route-selector.component.scss']
})
export class RouteSelectorComponent implements OnInit {

  products
  users
  productPathId
  userPathId

  constructor(private route: ActivatedRoute,
              private router: Router,
              private usersService: UsersService,
              private productsService: ProductsService) {

    this.products = this.productsService.products
    this.users = this.usersService.getUsers()
  }

  navigateTo(path) {
    this.router.navigate(path);
  }

  ngOnInit() {
  }

}
