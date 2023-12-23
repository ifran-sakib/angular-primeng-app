import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditOrderMasterComponent } from './add-edit-order-master.component';

describe('AddEditOrderMasterComponent', () => {
  let component: AddEditOrderMasterComponent;
  let fixture: ComponentFixture<AddEditOrderMasterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEditOrderMasterComponent]
    });
    fixture = TestBed.createComponent(AddEditOrderMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
