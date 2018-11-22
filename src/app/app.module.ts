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
import { ProductDetailsComponent } from './components/products-container/components/product-details/product-details.component';
import { TabsComponent } from './components/tabs/tabs.component'
import { STORAGE, storage } from './services/local-storage-proxy'

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
        TabsComponent
    ],
    imports: [
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
