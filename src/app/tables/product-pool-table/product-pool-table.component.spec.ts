import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPoolTableComponent } from './product-pool-table.component';

describe('ProductPoolTableComponent', () => {
  let component: ProductPoolTableComponent;
  let fixture: ComponentFixture<ProductPoolTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductPoolTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductPoolTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
