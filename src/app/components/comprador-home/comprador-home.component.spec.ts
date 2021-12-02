import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompradorHomeComponent } from './comprador-home.component';

describe('CompradorHomeComponent', () => {
  let component: CompradorHomeComponent;
  let fixture: ComponentFixture<CompradorHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompradorHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompradorHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
