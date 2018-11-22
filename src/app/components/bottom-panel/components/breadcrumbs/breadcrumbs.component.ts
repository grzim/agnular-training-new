import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivationEnd, NavigationEnd, Router } from '@angular/router'
import { filter, map, pluck, withLatestFrom } from 'rxjs/internal/operators'
import { outlets } from '../../../../router/app-routing.module'

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {

  primary;
  userDetails;
  productDetails;

  constructor(
    private router: Router) {
    const activationEnd$ = this.router.events.pipe(filter((event) => (event instanceof ActivationEnd)));
    const navigationEnd$ =  this.router.events.pipe(
      filter((event) => (event instanceof NavigationEnd)))
    const [primary$, userDetails$, productsDetails$] =
      ["primary", outlets.userDetails, outlets.productDetails].map(out =>
        activationEnd$.pipe(
          filter((route: ActivatedRoute) => route.snapshot.outlet === out),
          map(route => route.snapshot.url[0].path)
        )
      )
    navigationEnd$.pipe(
      withLatestFrom(primary$, userDetails$, productsDetails$, (_, primary, userDetails, productDetails) => ({
        primary, userDetails, productDetails
        })))
      .subscribe(({ primary, userDetails, productDetails}) => {
        this.primary = primary;
        this.userDetails = userDetails;
        this.productDetails = productDetails;
    })
  }

  ngOnInit() {
  }

}