import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElTa5sosComponent } from './el-ta5sos.component';

describe('ElTa5sosComponent', () => {
  let component: ElTa5sosComponent;
  let fixture: ComponentFixture<ElTa5sosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElTa5sosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElTa5sosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
