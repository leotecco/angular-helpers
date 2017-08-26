import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarAlunosComponent } from './criar-alunos.component';

describe('CriarAlunosComponent', () => {
  let component: CriarAlunosComponent;
  let fixture: ComponentFixture<CriarAlunosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriarAlunosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarAlunosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
