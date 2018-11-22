import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserContainerComponent } from '../components/user-container/user-container.component'
import { ProductsContainerComponent } from '../components/products-container/products-container.component'
import { ProductDetailsComponent } from '../components/products-container/components/product-details/product-details.component'
import { IsMatureGuard } from './is-mature.guard'



const productChildRoutes = [
  { path: 'details/:id',
    component: ProductDetailsComponent,
    canActivate: [IsMatureGuard],}
]

const routes: Routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: 'users', component: UserContainerComponent},
  { path: 'products', component: ProductsContainerComponent, children: productChildRoutes},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
