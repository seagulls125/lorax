import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandPoolTableComponent } from './brand-pool-table.component';

describe('BrandPoolTableComponent', () => {
  let component: BrandPoolTableComponent;
  let fixture: ComponentFixture<BrandPoolTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandPoolTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandPoolTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
