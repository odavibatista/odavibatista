import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SqlEcommerceComponent } from './sql-ecommerce.component';

describe('SqlEcommerceComponent', () => {
  let component: SqlEcommerceComponent;
  let fixture: ComponentFixture<SqlEcommerceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SqlEcommerceComponent]
    });
    fixture = TestBed.createComponent(SqlEcommerceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
