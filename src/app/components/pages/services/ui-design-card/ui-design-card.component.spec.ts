import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiDesignCardComponent } from './ui-design-card.component';

describe('UiDesignCardComponent', () => {
  let component: UiDesignCardComponent;
  let fixture: ComponentFixture<UiDesignCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UiDesignCardComponent]
    });
    fixture = TestBed.createComponent(UiDesignCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
