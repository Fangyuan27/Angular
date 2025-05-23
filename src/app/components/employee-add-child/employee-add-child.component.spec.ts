import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeAddChildComponent } from './employee-add-child.component';

describe('EmployeeAddChildComponent', () => {
  let component: EmployeeAddChildComponent;
  let fixture: ComponentFixture<EmployeeAddChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeAddChildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeAddChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
