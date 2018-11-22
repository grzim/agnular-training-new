import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserContainerComponent } from '../components/user-container/user-container.component'
import { ProductsContainerComponent } from '../components/products-container/products-container.component'
import { ProductDetailsComponent } from '../components/bottom-panel/components/product-details/product-details.component'
import { IsMatureGuard } from './is-mature.guard'
import { UserDetailsComponent } from '../components/bottom-panel/components/user-details/user-details.component'


export const outlets = {
  userDetails: 'user-details',
  productDetails: 'product-details',
}

const productChildRoutes = [
  { path: 'details/:id',
    component: ProductDetailsComponent,
    canActivate: [IsMatureGuard],}
]

const routes: Routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: ':id', outlet: outlets.userDetails, component: UserDetailsComponent},
  { path: ':id', outlet: outlets.productDetails, component: ProductDetailsComponent},
  { path: 'users', component: UserContainerComponent},
  { path: 'products', component: ProductsContainerComponent, children: productChildRoutes},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
