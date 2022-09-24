import { Component } from '@angular/core';

export interface Task {
  title: string
  id?: number
  
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mytodo';
  tasks: Task[] = [{ title: "Задачка", id: 1 }, { title: "Ну и задачка", id: 2 }]

  updateTask(task: Task) {
    this.tasks.unshift(task)
  }
  removeTask(id: number) {
    this.tasks = this.tasks.filter(item => item.id != id)
  }
}
