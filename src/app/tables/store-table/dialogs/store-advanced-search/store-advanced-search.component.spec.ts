import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreAdvancedSearchComponent } from './store-advanced-search.component';

describe('StoreAdvancedSearchComponent', () => {
  let component: StoreAdvancedSearchComponent;
  let fixture: ComponentFixture<StoreAdvancedSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreAdvancedSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreAdvancedSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
