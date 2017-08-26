import { Injectable } from '@angular/core';

@Injectable()
export class CursoService {

  private cursos: Array<string> = [
    'NodeJS',
    'Laravel',
    'Angular',
    'Typescript'
  ]

  constructor() { }

  getCursos():Array<string>{
    return this.cursos;
  }

  addCurso(curso: string){
    this.cursos.push(curso);
  }
}
