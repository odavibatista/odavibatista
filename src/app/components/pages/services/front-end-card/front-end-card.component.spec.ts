import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontEndCardComponent } from './front-end-card.component';

describe('FrontEndCardComponent', () => {
  let component: FrontEndCardComponent;
  let fixture: ComponentFixture<FrontEndCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FrontEndCardComponent]
    });
    fixture = TestBed.createComponent(FrontEndCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
