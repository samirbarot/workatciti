import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { routing, appRoutingProviders } from './app.routing';

import { ComponentOneComponent } from './component-one/component-one.component';
import { ComponentTwoModule } from './feature/component-two/component-two.module';
import { CountingDirective } from './counting.directive';

@NgModule({
  declarations: [
    AppComponent,
    ComponentOneComponent,
    CountingDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,

    ComponentTwoModule
  ],
  providers: [ appRoutingProviders ],
  bootstrap: [AppComponent]
})
export class AppModule { }
