import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Lembrete } from '../interfaces/lembrete';

@Injectable({
  providedIn: 'root'
})
export class LembreteService {

  constructor(private http: HttpClient) { }
  //pega todos lembretes
  getListaLembretes(): Observable<Lembrete[]> {
    const url = `${environment.lembretesApiUrl}/lembrete`;
    return this.http.get<Lembrete[]>(url);
  }
  //pega um lembrete
  getLembreteId(id: number): Observable<Lembrete> {
    const url = `${environment.lembretesApiUrl}/lembrete/${id}`;
    return this.http.get<Lembrete>(url);
  }
  //adiciona lembrete
  addLembrete(lembrete: Lembrete): Observable<Lembrete> {
    const url = `${environment.lembretesApiUrl}/lembrete/`;
    return this.http.post<Lembrete>(url, lembrete);
  }
  //atualiza um lembrete
  atualizaLembrete(lembrete: Lembrete): Observable<Lembrete> {
    const url = `${environment.lembretesApiUrl}/lembrete/${lembrete.id}`;
    return this.http.put<Lembrete>(url, lembrete);
  }
  //deleta um lembrete
  deletaLembrete(id: number): Observable<Lembrete> {
    const url = `${environment.lembretesApiUrl}/lembrete/${id}`;
    return this.http.delete<Lembrete>(url);
  }


}
