import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaCriptoMonedaComponent } from './alta-cripto-moneda.component';

describe('AltaCriptoMonedaComponent', () => {
  let component: AltaCriptoMonedaComponent;
  let fixture: ComponentFixture<AltaCriptoMonedaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AltaCriptoMonedaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaCriptoMonedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
