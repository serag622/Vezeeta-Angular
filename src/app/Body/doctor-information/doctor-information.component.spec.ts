import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorInformationComponent } from './doctor-information.component';

describe('DoctorInformationComponent', () => {
  let component: DoctorInformationComponent;
  let fixture: ComponentFixture<DoctorInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
