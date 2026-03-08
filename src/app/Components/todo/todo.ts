import { Component, inject, OnInit } from '@angular/core';
import { ToDo } from '../../Models/to-do';
import { ToDoService } from '../../Services/to-do.service';

@Component({
  selector: 'app-todo',
  imports: [],
  templateUrl: './todo.html',
  styleUrl: './todo.scss',
})
export class Todo implements OnInit {
  private todoService = inject(ToDoService);

  todos: ToDo[] = [
    { id: '1', title: 'Title One', completed: false },
    { id: '2', title: 'Title Two', completed: false },
    { id: '3', title: 'Title Three', completed: true }
  ];
  newToDo: ToDo = {} as ToDo;

  ngOnInit() {
    // Commented backend fetch to rely on static data matching design for now
    // this.getToDos();
  }

  getToDos() {
    this.todoService.getToDos().subscribe((todos) => {
      // this.todos = todos;
    });
  }
}
