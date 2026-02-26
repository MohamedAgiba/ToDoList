import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-to-do',
  imports: [ FormsModule],
  templateUrl: './to-do.html',
  styleUrl: './to-do.scss',
})
export class ToDo {
  Title:string = "To Do List Application";
  imageLink:string = "/photo.jpg";

  tasks: string[] = [];
  newTask: string = '';
  isAvailable : boolean = false;

  addTask(){
    if(this.newTask.trim() !== ""){
      this.tasks.push(this.newTask); 
      this.newTask = '';
      this.isAvailable = true;
    }
    console.log(this.tasks);
  }
  editTask(){
  }

  removeTask(){
  }
}
