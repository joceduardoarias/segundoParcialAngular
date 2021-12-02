import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecionarMonedaComponent } from './selecionar-moneda.component';

describe('SelecionarMonedaComponent', () => {
  let component: SelecionarMonedaComponent;
  let fixture: ComponentFixture<SelecionarMonedaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelecionarMonedaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelecionarMonedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
