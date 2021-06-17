import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoMisMateriasComponent } from './alumno-mis-materias.component';

describe('AlumnoMisMateriasComponent', () => {
  let component: AlumnoMisMateriasComponent;
  let fixture: ComponentFixture<AlumnoMisMateriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlumnoMisMateriasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumnoMisMateriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
