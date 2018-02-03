import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';
import { TestComponent } from './test/test.component';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    TestComponent,
    ListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
