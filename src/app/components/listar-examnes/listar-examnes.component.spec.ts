import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarExamnesComponent } from './listar-examnes.component';

describe('ListarExamnesComponent', () => {
  let component: ListarExamnesComponent;
  let fixture: ComponentFixture<ListarExamnesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarExamnesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarExamnesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
