import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefedNavbarComponent } from './defed-navbar.component';

describe('DefedNavbarComponent', () => {
  let component: DefedNavbarComponent;
  let fixture: ComponentFixture<DefedNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefedNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefedNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
