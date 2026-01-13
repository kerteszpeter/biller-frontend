import { TestBed } from '@angular/core/testing';

import { Ceg } from './ceg';

describe('Ceg', () => {
  let service: Ceg;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Ceg);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
