import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TestPageComponent } from './test-page.component';
import { DashboardComponent } from './dashboard.component';
import { OutputInputComponent } from './outputInput.component';
import { DropdownComponent } from './dropdown/dropdown.component';

import { FactorialPipe } from './factorial.pipe';
import { FindPhone } from './find-phone.pipe';
import {HttpModule} from '@angular/http';

import { HttpService } from './http.service';


import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    TestPageComponent,
    DashboardComponent,
    OutputInputComponent,
    DropdownComponent,
    FactorialPipe,
    FindPhone
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
