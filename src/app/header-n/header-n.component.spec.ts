import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderNComponent } from './header-n.component';

describe('HeaderNComponent', () => {
  let component: HeaderNComponent;
  let fixture: ComponentFixture<HeaderNComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderNComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
