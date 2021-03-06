import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './router/app-routing.module'
import { AppComponent } from './app.component'
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { UserContainerComponent } from './components/user-container/user-container.component';
import { UserDisplayComponent } from './components/user-container/components/user-display/user-display.component';
import { UserControlComponent } from './components/user-container/components/user-control/user-control.component';
import { LengthPipe } from './piepes/length.pipe';
import { TrimPipe } from './piepes/trim.pipe';
import { CutToPipe } from './piepes/cut-to.pipe';
import { ShowDescriptionDirective } from './directives/show-description.directive';
import { LogPropsDirective } from './directives/log-props.directive';
import { FoldDirective } from './directives/fold.directive';
import { TogglerComponent } from './components/toggler/toggler.component';
import { ProxyTogglerComponent } from './components/proxy-toggler/proxy-toggler.component';
import { ProductsContainerComponent } from './components/products-container/products-container.component';
import { ProductDetailsComponent } from './components/bottom-panel/components/product-details/product-details.component';
import { TabsComponent } from './components/tabs/tabs.component'
import { STORAGE, storage } from './services/local-storage-proxy';
import { UsersListComponent } from './components/user-container/components/users-list/users-list.component';
import { UserDetailsComponent } from './components/bottom-panel/components/user-details/user-details.component';
import { ProductsListComponent } from './components/products-container/components/products-list/products-list.component';
import { ListComponent } from './components/list/list.component';
import { ObjectDetailsComponent } from './components/object-details/object-details.component';
import { RouteSelectorComponent } from './components/bottom-panel/components/route-selector/route-selector.component'
import { FormsModule } from '@angular/forms';
import { BreadcrumbsComponent } from './components/bottom-panel/components/breadcrumbs/breadcrumbs.component';
import { BottomPanelComponent } from './components/bottom-panel/bottom-panel.component';

@NgModule({
    declarations: [
        AppComponent,
        UserContainerComponent,
        UserDisplayComponent,
        UserControlComponent,
        LengthPipe,
        TrimPipe,
        CutToPipe,
        ShowDescriptionDirective,
        LogPropsDirective,
        FoldDirective,
        TogglerComponent,
        ProxyTogglerComponent,
        ProductsContainerComponent,
        ProductDetailsComponent,
        TabsComponent,
        UsersListComponent,
        UserDetailsComponent,
        ProductsListComponent,
        ListComponent,
        ObjectDetailsComponent,
        RouteSelectorComponent,
        BreadcrumbsComponent,
        BottomPanelComponent
    ],
    imports: [
        FormsModule,
        NoopAnimationsModule,
        BrowserModule,
        AppRoutingModule
    ],
    providers: [
        {provide: STORAGE, useValue: storage}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
