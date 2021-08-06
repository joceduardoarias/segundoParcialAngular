import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectMateriaComponent } from './select-materia.component';

describe('SelectMateriaComponent', () => {
  let component: SelectMateriaComponent;
  let fixture: ComponentFixture<SelectMateriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectMateriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectMateriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
