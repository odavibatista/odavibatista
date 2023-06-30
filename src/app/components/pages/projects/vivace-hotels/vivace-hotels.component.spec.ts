import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VivaceHotelsComponent } from './vivace-hotels.component';

describe('VivaceHotelsComponent', () => {
  let component: VivaceHotelsComponent;
  let fixture: ComponentFixture<VivaceHotelsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VivaceHotelsComponent]
    });
    fixture = TestBed.createComponent(VivaceHotelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
