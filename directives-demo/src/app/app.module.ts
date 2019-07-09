import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }  from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FordemoComponent } from './fordemo/fordemo.component';
import { AttributedemoComponent } from './attributedemo/attributedemo.component';
import { IfdemoComponent } from './ifdemo/ifdemo.component';
import { FordemodetailComponent } from './fordemodetail/fordemodetail.component';
import { SwitchdemoComponent } from './switchdemo/switchdemo.component';
import { TemplaterefdemoComponent } from './templaterefdemo/templaterefdemo.component';

@NgModule({
  declarations: [
    AppComponent,
    FordemoComponent,
    AttributedemoComponent,
    IfdemoComponent,
    FordemodetailComponent,
    SwitchdemoComponent,
    TemplaterefdemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
