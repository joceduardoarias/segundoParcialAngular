import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerMateriasAdminComponent } from './ver-materias-admin.component';

describe('VerMateriasAdminComponent', () => {
  let component: VerMateriasAdminComponent;
  let fixture: ComponentFixture<VerMateriasAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerMateriasAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerMateriasAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
