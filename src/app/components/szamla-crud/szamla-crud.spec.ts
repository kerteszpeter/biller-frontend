import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SzamlaCrudComponent } from './szamla-crud';

describe('SzamlaCrudComponent', () => {
  let component: SzamlaCrudComponent;
  let fixture: ComponentFixture<SzamlaCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SzamlaCrudComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SzamlaCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


