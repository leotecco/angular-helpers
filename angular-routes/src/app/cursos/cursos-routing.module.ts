import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListarCursosComponent } from './listar-cursos/listar-cursos.component';
import { CadastrarCursosComponent } from './cadastrar-cursos/cadastrar-cursos.component';
import { EditarCursosComponent } from './editar-cursos/editar-cursos.component';

const cursosRoutes: Routes = [
  {
    path: 'cursos',
    component: ListarCursosComponent,
    children: [
      { path: 'criar', component: CadastrarCursosComponent },
      { path: 'editar', component: EditarCursosComponent }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(cursosRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: []
})
export class CursosRoutingModule { }
