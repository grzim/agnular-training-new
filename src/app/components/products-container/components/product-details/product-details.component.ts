import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { ProductsService } from '../../../../services/products.service'
import { Product } from '../../../../helpers/classes/product'
import { getValuesOf } from '../../../../helpers/helper-functions'

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  public product: Product;

  constructor(route: ActivatedRoute, private productsService: ProductsService) {
    route.params.subscribe(
        ({id}) => this.displayProduct(id)
    )
  }

  private displayProduct(id) {
    this.product = this.productsService.products[id];
  }

  getValuesOf(obj) {
    return getValuesOf(obj);
  }

  ngOnInit() {
  }

}
