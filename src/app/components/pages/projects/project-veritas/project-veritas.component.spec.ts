import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectVeritasComponent } from './project-veritas.component';

describe('ProjectVeritasComponent', () => {
  let component: ProjectVeritasComponent;
  let fixture: ComponentFixture<ProjectVeritasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectVeritasComponent]
    });
    fixture = TestBed.createComponent(ProjectVeritasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
