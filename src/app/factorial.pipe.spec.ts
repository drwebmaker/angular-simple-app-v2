import { async, TestBed, inject } from '@angular/core/testing';

import { FactorialPipe } from './factorial.pipe';

describe('Pipe: FactorialPipe', () => {
  let pipe;

  beforeEach(() => TestBed.configureTestingModule({
    providers: [ FactorialPipe ]
  }));

  beforeEach(inject([FactorialPipe], p => {
    pipe = p;
  }));

  it('factorial of 5 should be 120', () => {
    expect(pipe.transform(5)).toEqual(120);
  });

  it('factorial of 0 should be 0', () => {
    expect(pipe.transform(0)).toEqual(0);
  });

  it('should throw with invalid values', () => {
    expect(() => pipe.transform('')).toThrow();
    expect(() => pipe.transform()).toThrowError('Requires a Number as input');
  });

});
