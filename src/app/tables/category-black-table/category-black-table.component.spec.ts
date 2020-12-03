import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryBlackTableComponent } from './category-black-table.component';

describe('CategoryBlackTableComponent', () => {
  let component: CategoryBlackTableComponent;
  let fixture: ComponentFixture<CategoryBlackTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryBlackTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryBlackTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
