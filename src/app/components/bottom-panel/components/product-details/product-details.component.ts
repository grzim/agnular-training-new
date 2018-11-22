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

  public products: Array<Product>;

  constructor(private productsService: ProductsService) {
   this.products = this.productsService.products;
  }
  ngOnInit() {
  }

}
