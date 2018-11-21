import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { UserContainerComponent } from './components/user-container/user-container.component'

@NgModule({
    declarations: [
        AppComponent,
        UserContainerComponent
    ],
    imports: [
        NoopAnimationsModule,
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
