import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tarefa } from './model/tarefa';

@Injectable({
  providedIn: 'root'
})
export class CrudService{

  private readonly baseUrl = "http://localhost:3000/Tarefa";


  constructor(private http: HttpClient) {}


  ler(): Observable<Tarefa[]> {
    return this.http.get<Tarefa[]>(this.baseUrl);
  }

  lerPorId(id: string): Observable<Tarefa>{
    return this.http.get<Tarefa>(`${this.baseUrl}/${id}`)

  }

  adicionarTarefa(newTask: Tarefa): Observable<Tarefa> {
    return this.http.post<Tarefa>(this.baseUrl, newTask);
  }

  atualizarTarefa(task: Tarefa): Observable<Tarefa>{
    const url = `${this.baseUrl}/${task.id}`
    return this.http.put<Tarefa>(url, task)
  }

  deletarTarefa(id: number): Observable<Task> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Task>(url);
  }
}

