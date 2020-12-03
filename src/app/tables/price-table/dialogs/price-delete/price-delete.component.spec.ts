import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceDeleteComponent } from './price-delete.component';

describe('PriceDeleteComponent', () => {
  let component: PriceDeleteComponent;
  let fixture: ComponentFixture<PriceDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PriceDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
