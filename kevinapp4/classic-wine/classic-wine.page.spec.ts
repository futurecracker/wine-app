import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassicWinePage } from './classic-wine.page';

describe('ClassicWinePage', () => {
  let component: ClassicWinePage;
  let fixture: ComponentFixture<ClassicWinePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassicWinePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassicWinePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
