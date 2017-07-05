import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {rootComponent} from './rootcomponent';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    rootComponent

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [rootComponent]
})
export class AppModule { }
