import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TestPageComponent } from './test-page.component';
import { DashboardComponent } from './dashboard.component';

import { FactorialPipe } from './factorial.pipe';
import { FindPhone } from './find-phone.pipe';

import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    TestPageComponent,
    DashboardComponent,
    FactorialPipe,
    FindPhone
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
