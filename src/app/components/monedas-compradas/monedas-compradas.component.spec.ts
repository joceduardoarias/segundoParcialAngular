import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonedasCompradasComponent } from './monedas-compradas.component';

describe('MonedasCompradasComponent', () => {
  let component: MonedasCompradasComponent;
  let fixture: ComponentFixture<MonedasCompradasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonedasCompradasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonedasCompradasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
