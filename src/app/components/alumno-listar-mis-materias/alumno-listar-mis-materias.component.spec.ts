import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoListarMisMateriasComponent } from './alumno-listar-mis-materias.component';

describe('AlumnoListarMisMateriasComponent', () => {
  let component: AlumnoListarMisMateriasComponent;
  let fixture: ComponentFixture<AlumnoListarMisMateriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlumnoListarMisMateriasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumnoListarMisMateriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
