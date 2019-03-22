import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostManagementPage } from './post-management.page';

describe('PostManagementPage', () => {
  let component: PostManagementPage;
  let fixture: ComponentFixture<PostManagementPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostManagementPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostManagementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
