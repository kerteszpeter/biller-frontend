import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CegListaComponent } from './ceg-lista';

describe('CegListaComponent', () => {
  let component: CegListaComponent;
  let fixture: ComponentFixture<CegListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CegListaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CegListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

