import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module'

import { ListarCursosComponent } from './listar-cursos/listar-cursos.component';
import { CadastrarCursosComponent } from './cadastrar-cursos/cadastrar-cursos.component';
import { EditarCursosComponent } from './editar-cursos/editar-cursos.component';

@NgModule({
  imports: [
    CommonModule,
    CursosRoutingModule
  ],
  declarations: [
    ListarCursosComponent,
    CadastrarCursosComponent,
    EditarCursosComponent
  ]
})
export class CursosModule { }
