import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlunosRoutingModule } from './alunos-routing.module';

import { ListarAlunosComponent } from './listar-alunos/listar-alunos.component';
import { CriarAlunosComponent } from './criar-alunos/criar-alunos.component';
import { EditarAlunosComponent } from './editar-alunos/editar-alunos.component';

@NgModule({
  imports: [
    CommonModule,
    AlunosRoutingModule
  ],
  declarations: [
    ListarAlunosComponent,
    CriarAlunosComponent,
    EditarAlunosComponent
  ]
})
export class AlunosModule { }
