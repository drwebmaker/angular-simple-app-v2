import { async, TestBed, inject } from '@angular/core/testing';
import { OutputInputComponent } from './outputInput.component';
import { FormsModule } from '@angular/forms';
import {Observable} from 'rxjs/Observable';

describe('Component: OutputInputComponent', () => {
  let fixture, greeter, element, de;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ OutputInputComponent ],
      imports: [FormsModule]
    });

    fixture = TestBed.createComponent(OutputInputComponent);
    greeter = fixture.componentInstance;
    element = fixture.nativeElement;
    de = fixture.debugElement;
  });

  it('should render input with `World`', async(() => {
    const testStr = 'World';
    greeter.userName = testStr;
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(element.querySelector('input').value).toBe(testStr);
      // expect(de.query(By.css('h1')).nativeElement.innerText).toBe('Hello World!');
    });
  }));
});
