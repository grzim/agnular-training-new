import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-products-container',
  templateUrl: './products-container.component.html',
  styleUrls: ['./products-container.component.scss']
})
export class ProductsContainerComponent implements OnInit {

  public products;
  constructor(private productService: ProductsService, private router: Router) {
    this.products = this.productService.products;
  }

  navigateTo(i) {
    this.router.navigate(['products', 'details', i])
  }

  ngOnInit() {
  }

}
