import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { ProductsService } from '../../../../services/products.service'
import { outlets } from '../../../../router/app-routing.module'

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  products;
  constructor(private router: Router,
              private productService: ProductsService,) {
    this.products = this.productService.products
  }

  navigateTo({index}) {
    this.router.navigate([
      {
        outlets: {
          [outlets.productDetails]: [index]
        }
      }
    ])
  }

  ngOnInit() {
  }

}
