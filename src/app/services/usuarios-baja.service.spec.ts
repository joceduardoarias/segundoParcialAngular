import { TestBed } from '@angular/core/testing';

import { UsuariosBajaService } from './usuarios-baja.service';

describe('UsuariosBajaService', () => {
  let service: UsuariosBajaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsuariosBajaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
