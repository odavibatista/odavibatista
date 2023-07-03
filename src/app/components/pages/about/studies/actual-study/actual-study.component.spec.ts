import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualStudyComponent } from './actual-study.component';

describe('ActualStudyComponent', () => {
  let component: ActualStudyComponent;
  let fixture: ComponentFixture<ActualStudyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActualStudyComponent]
    });
    fixture = TestBed.createComponent(ActualStudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
