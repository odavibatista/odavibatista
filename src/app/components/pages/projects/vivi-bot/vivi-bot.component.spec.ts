import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViviBotComponent } from './vivi-bot.component';

describe('ViviBotComponent', () => {
  let component: ViviBotComponent;
  let fixture: ComponentFixture<ViviBotComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViviBotComponent]
    });
    fixture = TestBed.createComponent(ViviBotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
