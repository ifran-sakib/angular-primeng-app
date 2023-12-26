import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableFilterMenuDemoComponent } from './table-filter-menu-demo.component';

describe('TableFilterMenuDemoComponent', () => {
  let component: TableFilterMenuDemoComponent;
  let fixture: ComponentFixture<TableFilterMenuDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableFilterMenuDemoComponent]
    });
    fixture = TestBed.createComponent(TableFilterMenuDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
