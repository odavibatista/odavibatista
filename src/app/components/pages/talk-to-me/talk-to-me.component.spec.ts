import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalkToMeComponent } from './talk-to-me.component';

describe('TalkToMeComponent', () => {
  let component: TalkToMeComponent;
  let fixture: ComponentFixture<TalkToMeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TalkToMeComponent]
    });
    fixture = TestBed.createComponent(TalkToMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
