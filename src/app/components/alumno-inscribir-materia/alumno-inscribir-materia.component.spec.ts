import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoInscribirMateriaComponent } from './alumno-inscribir-materia.component';

describe('AlumnoInscribirMateriaComponent', () => {
  let component: AlumnoInscribirMateriaComponent;
  let fixture: ComponentFixture<AlumnoInscribirMateriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlumnoInscribirMateriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumnoInscribirMateriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
