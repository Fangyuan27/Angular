import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeTableChildComponent } from './employee-table-child.component';

describe('EmployeeTableChildComponent', () => {
  let component: EmployeeTableChildComponent;
  let fixture: ComponentFixture<EmployeeTableChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeTableChildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeTableChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
