import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderMaserComponent } from './order-maser.component';

describe('OrderMaserComponent', () => {
  let component: OrderMaserComponent;
  let fixture: ComponentFixture<OrderMaserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderMaserComponent]
    });
    fixture = TestBed.createComponent(OrderMaserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
