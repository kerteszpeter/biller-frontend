import { TestBed } from '@angular/core/testing';

import { Szamla } from './szamla';

describe('Szamla', () => {
  let service: Szamla;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Szamla);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
