import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceColumnDataComponent } from './insurance-column-data.component';

describe('InsuranceColumnDataComponent', () => {
  let component: InsuranceColumnDataComponent;
  let fixture: ComponentFixture<InsuranceColumnDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsuranceColumnDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsuranceColumnDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
