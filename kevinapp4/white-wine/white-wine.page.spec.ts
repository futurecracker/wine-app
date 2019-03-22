import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhiteWinePage } from './white-wine.page';

describe('WhiteWinePage', () => {
  let component: WhiteWinePage;
  let fixture: ComponentFixture<WhiteWinePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhiteWinePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhiteWinePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
