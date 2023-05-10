
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  taskId=3
  todolist = [
    {
      id: 1,
      'task': "Task1"
    },
    {
      id: 2,
      'task': "Task2"
    },
  ]

  constructor() { }
  
  addTodo(taskName:any){
    this.todolist.push({"id":this.taskId++,'task':taskName})
  }

  deleteTodo(index:number){
    this.todolist.splice(index,1)
  }



}
