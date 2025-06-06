import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabindingComponent } from './databinding.component';


describe('DatabindingComponent', () => {
  let component: DatabindingComponent;
  let fixture: ComponentFixture<DatabindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatabindingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatabindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
