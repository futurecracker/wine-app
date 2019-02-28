import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrenchWinePage } from './french-wine.page';

describe('FrenchWinePage', () => {
  let component: FrenchWinePage;
  let fixture: ComponentFixture<FrenchWinePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrenchWinePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrenchWinePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
