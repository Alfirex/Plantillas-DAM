import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tab3EditUserPage } from './tab3-edit-user.page';

describe('Tab3EditUserPage', () => {
  let component: Tab3EditUserPage;
  let fixture: ComponentFixture<Tab3EditUserPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tab3EditUserPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tab3EditUserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
