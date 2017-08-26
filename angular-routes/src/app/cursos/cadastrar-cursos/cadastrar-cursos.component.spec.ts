import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarCursosComponent } from './cadastrar-cursos.component';

describe('CadastrarCursosComponent', () => {
  let component: CadastrarCursosComponent;
  let fixture: ComponentFixture<CadastrarCursosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrarCursosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
