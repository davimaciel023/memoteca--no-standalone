import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Pensamento } from './pensamento';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PensamentoService {

  private readonly API = 'http://localhost:3000/pensamentos'

  constructor(private http: HttpClient) { }

  listar(pagina: number, filtro: string, favoritos: boolean): Observable<Pensamento[]> {

    const itensPorPaginas = 6;

    let params = new HttpParams()
    .set("_pages", pagina)
    .set("_limit", itensPorPaginas)

    if(filtro.trim().length > 2){
      params = params.set('q', filtro)
    }

    if(favoritos){
      params = params.set("favoritos", true)
    }
    return this.http.get<Pensamento[]>(this.API, {params})
  }


  criar(pensamento: Pensamento): Observable<Pensamento> {
    return this.http.post<Pensamento>(this.API, pensamento)
  }

  editar(pensamento: Pensamento): Observable<Pensamento> {
    const url = `${this.API}/${pensamento.id}`
    return this.http.put<Pensamento>(url, pensamento )

  }

  mudarFavorito(pensamento: Pensamento): Observable<Pensamento>{
    pensamento.favorito = !pensamento.favorito
    return this.editar(pensamento)
  }

  excluir(id: number): Observable<Pensamento> {
    const url = `${this.API}/${id}`
    return this.http.delete<Pensamento>(url)
  }

  buscarPorId(id: number): Observable<Pensamento> {
    const url = `${this.API}/${id}`
    return this.http.get<Pensamento>(url)
  }

}
