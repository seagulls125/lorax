import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryMainDeleteComponent } from './category-main-delete.component';

describe('CategoryMainDeleteComponent', () => {
  let component: CategoryMainDeleteComponent;
  let fixture: ComponentFixture<CategoryMainDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryMainDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryMainDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
