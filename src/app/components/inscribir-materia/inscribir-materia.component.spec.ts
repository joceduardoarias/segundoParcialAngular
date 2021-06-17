import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscribirMateriaComponent } from './inscribir-materia.component';

describe('InscribirMateriaComponent', () => {
  let component: InscribirMateriaComponent;
  let fixture: ComponentFixture<InscribirMateriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscribirMateriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InscribirMateriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
