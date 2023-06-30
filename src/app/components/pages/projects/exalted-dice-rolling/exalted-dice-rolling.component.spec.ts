import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExaltedDiceRollingComponent } from './exalted-dice-rolling.component';

describe('ExaltedDiceRollingComponent', () => {
  let component: ExaltedDiceRollingComponent;
  let fixture: ComponentFixture<ExaltedDiceRollingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExaltedDiceRollingComponent]
    });
    fixture = TestBed.createComponent(ExaltedDiceRollingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
