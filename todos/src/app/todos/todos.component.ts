
import { DATE_PIPE_DEFAULT_TIMEZONE } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../shared/data.service';
import { Todo } from '../shared/todo.modul';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todos: Todo[] = []
  showValidationErrors: boolean = false

  constructor(private dataServise: DataService) { }

  ngOnInit(): void {
    this.todos = this.dataServise.getAllTodos()
  }
  onFormSubmit(form: NgForm) {
    if (form.valid) {
      this.dataServise.addTodo(new Todo(form.value.text))
      form.reset() // clear input
      this.showValidationErrors = false
    } else this.showValidationErrors = true

  }
  
  toggleComplited(todo: Todo){
    todo.completed = !todo.completed
  }

}
