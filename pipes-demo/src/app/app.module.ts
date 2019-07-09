import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SqrtPipe } from './shared/sqrt.pipe';
import { SqrtDemoComponent } from './sqrt-demo/sqrt-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    SqrtPipe,
    SqrtDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
