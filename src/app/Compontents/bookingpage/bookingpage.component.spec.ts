import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingpageComponent } from './bookingpage.component';

describe('BookingpageComponent', () => {
  let component: BookingpageComponent;
  let fixture: ComponentFixture<BookingpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
