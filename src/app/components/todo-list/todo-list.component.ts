import { Component, OnInit, ViewChild } from '@angular/core';
import { CheckboxChangeEvent } from 'primeng/checkbox';
import { Todo } from 'src/app/interfaces/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  @ViewChild('todoTask') todoTask: any;
  
  task = '';
  // todos=[
  //   {
  //     id:1,
  //     task:'1st',
  //     completed:false
  //   },
  //   {
  //     id:2,
  //     task:'2nd',
  //     completed:true
  //   }
  // ]
  todos: Todo[] = [];

  constructor(private appService: TodoService) {
  }

  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this.appService.getTodoList().subscribe(
      response => {
        this.todos = response;
      }
    )
  }

  updateTodo(e: CheckboxChangeEvent, todo: Todo) {
    this.appService.updateTodo({ ...todo, completed: e.checked }).subscribe(
      response => console.log(response)
    )
  }

  deleteTodo(e: unknown, id: Todo['id']) {
    this.appService.deleteTodo(id).subscribe(
      response => this.getList()
    )
  }

  addTodo() {
    this.appService.addTodo({ task: this.task, completed: false }).subscribe(
      response => {
        this.todoTask.reset();
        this.getList();
      }
    )
  }
}