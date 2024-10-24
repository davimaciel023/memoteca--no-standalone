import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarPensamentosComponent } from './componentes/pensamentos/listar-pensamentos/listar-pensamentos.component';
import { CriarPensamentosComponent } from './componentes/pensamentos/criar-pensamentos/criar-pensamentos.component';
import { EditarPensamentosComponent } from './componentes/pensamentos/editar-pensamentos/editar-pensamentos.component';
import { ExcluirPensamentosComponent } from './componentes/pensamentos/excluir-pensamentos/excluir-pensamentos.component';

const routes: Routes = [
  {
  path: '',
  redirectTo: 'listarPensamento',
  pathMatch: 'full'
  },
  {
    path: 'listarPensamento',
    component: ListarPensamentosComponent
  },
  {
    path: 'criarPensamento',
    component: CriarPensamentosComponent
  },
  {
    path: 'editarPensamento',
    component: EditarPensamentosComponent
  },
  {
    path: 'excluirPensamento',
    component: ExcluirPensamentosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

