import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoListarMateriaComponent } from './alumno-listar-materia.component';

describe('AlumnoListarMateriaComponent', () => {
  let component: AlumnoListarMateriaComponent;
  let fixture: ComponentFixture<AlumnoListarMateriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlumnoListarMateriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumnoListarMateriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
