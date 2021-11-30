import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnDataComponent } from './column-data.component';

describe('ColumnDataComponent', () => {
  let component: ColumnDataComponent;
  let fixture: ComponentFixture<ColumnDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColumnDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
