import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { UserContainerComponent } from './components/user-container/user-container.component';
import { UserDisplayComponent } from './components/user-container/components/user-display/user-display.component';
import { UserControlComponent } from './components/user-container/components/user-control/user-control.component';
import { LengthPipe } from './helpers/piepes/length.pipe'

@NgModule({
    declarations: [
        AppComponent,
        UserContainerComponent,
        UserDisplayComponent,
        UserControlComponent,
        LengthPipe
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
