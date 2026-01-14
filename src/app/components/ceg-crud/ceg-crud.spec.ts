import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CegCrudComponent } from './ceg-crud';

describe('CegCrudComponent', () => {
  let component: CegCrudComponent;
  let fixture: ComponentFixture<CegCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CegCrudComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CegCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

