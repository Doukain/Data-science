import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadingcategoriesComponent } from './headingcategories.component';

describe('HeadingcategoriesComponent', () => {
  let component: HeadingcategoriesComponent;
  let fixture: ComponentFixture<HeadingcategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadingcategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadingcategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
