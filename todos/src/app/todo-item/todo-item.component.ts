import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../shared/todo.modul';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() task: Todo = new Todo('')
  @Output() todoClicked :EventEmitter<void> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  onClickTodo(){
    this.todoClicked.emit()
  }
}
