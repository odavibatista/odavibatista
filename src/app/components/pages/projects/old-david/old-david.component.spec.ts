import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OldDavidComponent } from './old-david.component';

describe('OldDavidComponent', () => {
  let component: OldDavidComponent;
  let fixture: ComponentFixture<OldDavidComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OldDavidComponent]
    });
    fixture = TestBed.createComponent(OldDavidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
