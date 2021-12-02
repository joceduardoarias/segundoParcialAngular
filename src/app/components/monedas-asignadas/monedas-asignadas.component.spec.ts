import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonedasAsignadasComponent } from './monedas-asignadas.component';

describe('MonedasAsignadasComponent', () => {
  let component: MonedasAsignadasComponent;
  let fixture: ComponentFixture<MonedasAsignadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonedasAsignadasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonedasAsignadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
