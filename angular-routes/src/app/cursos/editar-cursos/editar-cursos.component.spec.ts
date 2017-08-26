import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarCursosComponent } from './editar-cursos.component';

describe('EditarCursosComponent', () => {
  let component: EditarCursosComponent;
  let fixture: ComponentFixture<EditarCursosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarCursosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
