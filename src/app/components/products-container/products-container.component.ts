import { Component, Inject, OnInit, Optional } from '@angular/core'
import { ProductsService } from '../../services/products.service'
import { Router } from '@angular/router'
import {
  STORAGE, createStorageProxy, LocalStorageProxyInterface
} from '../../services/local-storage-proxy'

@Component({
  selector: 'app-products-container',
  templateUrl: './products-container.component.html',
  styleUrls: ['./products-container.component.scss']
})
export class ProductsContainerComponent implements OnInit {

  public products
  public isMature
  public localStorageProxy: LocalStorageProxyInterface

  constructor(@Inject(STORAGE) storage: Storage) {
    this.localStorageProxy = createStorageProxy(storage)
    this.isMature = this.localStorageProxy.isMature
  }

  ngOnInit() {
  }

}
