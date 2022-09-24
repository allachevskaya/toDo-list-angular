import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Task } from '../app.component';
@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent implements OnInit {

  @Output() onTask:EventEmitter<Task> = new EventEmitter<Task>()

  title=''


  constructor() { }

  ngOnInit(): void {
  }

  addTask(){
    if(this.title.trim()){
      const task:Task = {
        title: this.title
      }
      
      this.onTask.emit(task) // отправили 
    }
    this.title = ''
    
  }

}
