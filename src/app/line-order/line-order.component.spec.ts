import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineOrderComponent } from './line-order.component';

describe('LineOrderComponent', () => {
  let component: LineOrderComponent;
  let fixture: ComponentFixture<LineOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineOrderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LineOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
