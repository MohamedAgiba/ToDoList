import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ToDo } from '../Models/to-do';
import { Observable } from 'rxjs';
import { Todo } from '../Components/todo/todo';

@Injectable({
  providedIn: 'root',
})
export class ToDoService {
  private readonly _http = inject(HttpClient);
  private apiUrl = 'http://localhost:4200/todo';

  // get  
  getToDos(): Observable<ToDo[]>{
    return this._http.get<ToDo[]>(this.apiUrl);
  }
  // post
  createToDo(todo: ToDo): Observable<ToDo>{
    return this._http.post<ToDo>(this.apiUrl, JSON.stringify(todo))
  }
  // get by ID
  getToDoById(id: string): Observable<ToDo>{
    return this._http.get<ToDo>(`${this.apiUrl}/${id}`)
  }
  // update
  updateToDo(todo: ToDo): Observable<ToDo>{
    return this._http.put<ToDo>(`${this.apiUrl}/${todo.id}`, todo)
  }
  // delete
  deleteToDo(todoId: string): Observable<void>{
    return this._http.delete<void>(`${this.apiUrl}/${todoId}`)
  }
}
