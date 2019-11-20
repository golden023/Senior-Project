import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TailgateComponent } from './tailgate.component';

describe('TailgateComponent', () => {
  let component: TailgateComponent;
  let fixture: ComponentFixture<TailgateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TailgateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TailgateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
