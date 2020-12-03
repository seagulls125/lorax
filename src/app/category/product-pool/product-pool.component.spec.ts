import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPoolComponent } from './product-pool.component';

describe('ProductPoolComponent', () => {
  let component: ProductPoolComponent;
  let fixture: ComponentFixture<ProductPoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductPoolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductPoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
