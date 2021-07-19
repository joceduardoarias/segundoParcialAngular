import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarMateriasProfesorComponent } from './listar-materias-profesor.component';

describe('ListarMateriasProfesorComponent', () => {
  let component: ListarMateriasProfesorComponent;
  let fixture: ComponentFixture<ListarMateriasProfesorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarMateriasProfesorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarMateriasProfesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
