import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackEndCardComponent } from './back-end-card.component';

describe('BackEndCardComponent', () => {
  let component: BackEndCardComponent;
  let fixture: ComponentFixture<BackEndCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BackEndCardComponent]
    });
    fixture = TestBed.createComponent(BackEndCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
