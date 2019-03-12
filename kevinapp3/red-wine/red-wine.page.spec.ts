import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedWinePage } from './red-wine.page';

describe('RedWinePage', () => {
  let component: RedWinePage;
  let fixture: ComponentFixture<RedWinePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedWinePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedWinePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
