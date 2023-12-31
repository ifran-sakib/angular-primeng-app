import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderListFilteredComponent } from './order-list-filtered.component';

describe('OrderListFilteredComponent', () => {
  let component: OrderListFilteredComponent;
  let fixture: ComponentFixture<OrderListFilteredComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderListFilteredComponent]
    });
    fixture = TestBed.createComponent(OrderListFilteredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
