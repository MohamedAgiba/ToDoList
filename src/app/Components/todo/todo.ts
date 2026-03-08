import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToDo } from '../../Models/to-do';
import { ToDoService } from '../../Services/to-do.service';

@Component({
  selector: 'app-todo',
  imports: [FormsModule],
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
  newToDo: ToDo = { id: '', title: '', completed: false };

  ngOnInit() {
    // Commented backend fetch to rely on static data matching design for now
    // this.getToDos();
  }

  getToDos() {
    this.todoService.getToDos().subscribe((todos) => {
      // this.todos = todos;
    });
  }

  addTodo() {
    if (this.newToDo.title && this.newToDo.title.trim() !== '') {
      const newTask: ToDo = {
        id: Date.now().toString(),
        title: this.newToDo.title.trim(),
        completed: false
      };
      this.todos.push(newTask);
      this.newToDo.title = ''; // clear input
    }
  }

  deleteTodo(id: string) {
    this.todos = this.todos.filter(t => t.id !== id);
  }

  toggleTodo(todo: ToDo) {
    todo.completed = !todo.completed;
  }
}
