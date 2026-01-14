import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SzamlaLista } from './szamla-lista';

describe('SzamlaLista', () => {
  let component: SzamlaLista;
  let fixture: ComponentFixture<SzamlaLista>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SzamlaLista]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SzamlaLista);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
