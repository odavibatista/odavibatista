import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackEndComponent } from './back-end.component';

describe('BackEndComponent', () => {
  let component: BackEndComponent;
  let fixture: ComponentFixture<BackEndComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BackEndComponent]
    });
    fixture = TestBed.createComponent(BackEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
