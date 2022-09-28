import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from '../app.component';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  
  @Input() task!: Task;
  @Output() onRemove = new EventEmitter<number>()
  @Output() onEdit =new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
  
  removeTask(){
    this.onRemove.emit(this.task.id)
   
  }
  editTask(){
    this.onEdit.emit(this.task)
  }

}
