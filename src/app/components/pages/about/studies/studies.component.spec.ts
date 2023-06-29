import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudiesComponent } from './studies.component';

describe('StudiesComponent', () => {
  let component: StudiesComponent;
  let fixture: ComponentFixture<StudiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudiesComponent]
    });
    fixture = TestBed.createComponent(StudiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
