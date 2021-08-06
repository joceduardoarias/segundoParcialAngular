import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariosBjaComponent } from './usuarios-bja.component';

describe('UsuariosBjaComponent', () => {
  let component: UsuariosBjaComponent;
  let fixture: ComponentFixture<UsuariosBjaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuariosBjaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuariosBjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
