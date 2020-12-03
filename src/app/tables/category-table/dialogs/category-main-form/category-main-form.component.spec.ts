import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryMainFormComponent } from './category-main-form.component';

describe('CategoryMainFormComponent', () => {
  let component: CategoryMainFormComponent;
  let fixture: ComponentFixture<CategoryMainFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryMainFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryMainFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
