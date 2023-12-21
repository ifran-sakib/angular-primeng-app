import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductLazyLoadListComponent } from './product-lazy-load-list.component';

describe('ProductLazyLoadListComponent', () => {
  let component: ProductLazyLoadListComponent;
  let fixture: ComponentFixture<ProductLazyLoadListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductLazyLoadListComponent]
    });
    fixture = TestBed.createComponent(ProductLazyLoadListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
