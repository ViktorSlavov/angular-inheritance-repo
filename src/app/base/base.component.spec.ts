import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseDirective } from './base.component';

describe('BaseComponent', () => {
  let component: BaseDirective;
  let fixture: ComponentFixture<BaseDirective>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseDirective ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseDirective);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
