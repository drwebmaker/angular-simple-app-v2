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
import { PopoverModule } from 'ngx-bootstrap';

import { PiPopoverDirective } from './pi-popover.directive';
import { PersonComponent } from './pi-popover.directive';
import { PopoverTemplateService } from './pi-popover.directive';

import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    TestPageComponent,
    DashboardComponent,
    OutputInputComponent,
    DropdownComponent,
    FactorialPipe,
    FindPhone,
    PiPopoverDirective,
    PersonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    PopoverModule.forRoot()
  ],
  providers: [HttpService, PopoverTemplateService],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  entryComponents: [PersonComponent]
})
export class AppModule { }
