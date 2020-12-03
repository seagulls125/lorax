import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MwsComponent } from './mws.component';

describe('MwsComponent', () => {
  let component: MwsComponent;
  let fixture: ComponentFixture<MwsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MwsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MwsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
