import { Inject, Injectable } from '@angular/core'
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductsService } from '../services/products.service'
import { createStorageProxy, STORAGE } from '../services/local-storage-proxy'

@Injectable({
  providedIn: 'root'
})
export class IsMatureGuard implements CanActivate {

  private storage;
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if(this.productsService.products[next.params.id].category === 'alcohol') {
      return this.storage.isMature;
    }
    else {}
      return true;
  }
  constructor(private productsService: ProductsService, @Inject(STORAGE) storage: Storage) {
    this.storage = createStorageProxy(storage);
  }
}
