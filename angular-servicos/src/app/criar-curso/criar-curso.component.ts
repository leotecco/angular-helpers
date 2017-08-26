import { Component, OnInit, Input } from '@angular/core';

import { CursoService } from './../services/curso.service';

@Component({
  selector: 'app-criar-curso',
  templateUrl: './criar-curso.component.html',
  styleUrls: ['./criar-curso.component.css']
})
export class CriarCursoComponent implements OnInit {
  @Input() novoCurso = "";

  constructor(private cursoService: CursoService) { }

  ngOnInit() {
  }

  addCurso(curso: string){
    this.cursoService.addCurso(this.novoCurso);
    this.novoCurso = "";
  }

}
