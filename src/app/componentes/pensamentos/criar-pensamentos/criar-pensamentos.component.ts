import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-pensamentos',
  templateUrl: './criar-pensamentos.component.html',
  styleUrl: './criar-pensamentos.component.css'
})
export class CriarPensamentosComponent {
  constructor (
    // private router: Router
  ) { }

  ngOnInit(): void {}

  criarPensamento() {
    alert('Criado')
  }

  cancelar() {
    alert('Cancelado')
  }
}
