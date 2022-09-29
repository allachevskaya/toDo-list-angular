import { Injectable } from '@angular/core';
import { Todo } from './todo.modul';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  todos:Todo[] =[
    new Todo('this is a test'),
    new Todo('heheheheh', true)
  ]

  constructor() { }

  getAllTodos(){
    return this.todos
  }
  addTodo(todo:Todo){
    this.todos.push(todo)
  }
  updateTodo(index:number, updateTodo: Todo){
    this.todos[index] = updateTodo
  }

  deleteTodo(index:number){
    this.todos.slice(index,1)
  }
}
