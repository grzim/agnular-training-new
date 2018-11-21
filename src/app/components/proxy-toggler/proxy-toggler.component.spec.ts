import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProxyTogglerComponent } from './proxy-toggler.component';

describe('ProxyTogglerComponent', () => {
  let component: ProxyTogglerComponent;
  let fixture: ComponentFixture<ProxyTogglerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProxyTogglerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProxyTogglerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
