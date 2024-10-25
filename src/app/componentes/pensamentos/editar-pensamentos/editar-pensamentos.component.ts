import { Pensamento } from './../pensamento';
import { Component } from '@angular/core';
import { PensamentoService } from '../pensamento.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-pensamentos',
  templateUrl: './editar-pensamentos.component.html',
  styleUrl: './editar-pensamentos.component.css'
})
export class EditarPensamentosComponent {

  pensamento: Pensamento = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: '',
  }


  constructor(
    private service: PensamentoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }
}
