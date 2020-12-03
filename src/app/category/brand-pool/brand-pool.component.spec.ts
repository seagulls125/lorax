import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandPoolComponent } from './brand-pool.component';

describe('BrandPoolComponent', () => {
  let component: BrandPoolComponent;
  let fixture: ComponentFixture<BrandPoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandPoolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandPoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
