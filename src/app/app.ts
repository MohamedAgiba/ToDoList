import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
protected tasks = signal<string[]>([]);

addTask(task:string){
  if(task.trim()){
    this.tasks.update(tasks => [...tasks, task]);
    console.log('Current List',this.tasks())
  }
}
deleteTask(index: number) {
  this.tasks.update(oldTasks => 
    oldTasks.filter((_, i) => i !== index) 
  );
}
}
