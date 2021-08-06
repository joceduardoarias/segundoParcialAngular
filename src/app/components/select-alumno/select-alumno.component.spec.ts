import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectAlumnoComponent } from './select-alumno.component';

describe('SelectAlumnoComponent', () => {
  let component: SelectAlumnoComponent;
  let fixture: ComponentFixture<SelectAlumnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectAlumnoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
