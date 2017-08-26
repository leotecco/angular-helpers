import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListarAlunosComponent } from './listar-alunos/listar-alunos.component';
import { CriarAlunosComponent } from './criar-alunos/criar-alunos.component';
import { EditarAlunosComponent } from './editar-alunos/editar-alunos.component';

const alunosRoutes: Routes = [
  {
    path: '',
    component: ListarAlunosComponent,
    children: [
      { path: 'criar', component: CriarAlunosComponent },
      { path: 'editar', component: EditarAlunosComponent }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(alunosRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: []
})
export class AlunosRoutingModule { }
