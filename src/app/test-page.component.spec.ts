import { async, TestBed, inject } from '@angular/core/testing';
import { By } from '@angular/platform-browser'; /* add this to use By.css('button') */
import { FormsModule } from '@angular/forms';

import {RouterTestingModule} from '@angular/router/testing';

import { HttpModule, Response, Http, BaseRequestOptions, XHRBackend } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

import { FactorialPipe } from './factorial.pipe';
import { FindPhone } from './find-phone.pipe';

import { HttpService} from './http.service';

import { TestPageComponent } from './test-page.component';
import { OutputInputComponent } from './outputInput.component';
import {Observable} from 'rxjs/Observable';

describe('TestPageComponent', () => {
  const jsonMock: Array<any> = [{
    "name": "Bob",
    "age": 28
  },{
    "name": "Tom",
    "age": 45
  },{
    "name": "Alice",
    "age": 32
  }];
  beforeEach(async(() => {

    class HttpServiceMock {
      getData() {
        return new Observable(observer => {
          setTimeout(() => {
            observer.next(jsonMock);
            observer.complete();
          }, 0);
        });
      }
    }

    TestBed.configureTestingModule({
      declarations: [
        TestPageComponent,
        OutputInputComponent,
        FactorialPipe,
        FindPhone
      ],
      imports: [
        HttpModule,
        FormsModule,
        RouterTestingModule
      ],
      providers: [{ provide: HttpService, useClass: HttpServiceMock }
      ],
    }).compileComponents();
  }));

  it(`should have as title 'lsl'`, async(() => {
    const fixture = TestBed.createComponent(TestPageComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Letslearn'); /* change title */
  }));

  it('should return correct json', inject([HttpService], (testService: HttpService) => {
    testService.getData().subscribe((data: Response) => {
      console.log("data", data);
      expect(data.json()).toBe(jsonMock);
    });
  }));
});
