import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippinginfoComponent } from './shippinginfo.component';

describe('ShippinginfoComponent', () => {
  let component: ShippinginfoComponent;
  let fixture: ComponentFixture<ShippinginfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShippinginfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShippinginfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
