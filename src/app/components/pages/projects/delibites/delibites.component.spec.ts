import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelibitesComponent } from './delibites.component';

describe('DelibitesComponent', () => {
  let component: DelibitesComponent;
  let fixture: ComponentFixture<DelibitesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DelibitesComponent]
    });
    fixture = TestBed.createComponent(DelibitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
