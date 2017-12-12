import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { Child1Component } from './child-1/child-1.component';
import { InputDemoComponent } from './input-demo/input-demo.component';



@NgModule({
  declarations: [
    AppComponent,
    Child1Component,
    InputDemoComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
