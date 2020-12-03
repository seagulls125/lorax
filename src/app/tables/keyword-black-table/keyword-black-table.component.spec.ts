import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeywordBlackTableComponent } from './keyword-black-table.component';

describe('KeywordBlackTableComponent', () => {
  let component: KeywordBlackTableComponent;
  let fixture: ComponentFixture<KeywordBlackTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeywordBlackTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KeywordBlackTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
