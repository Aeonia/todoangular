import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'todo-list',
  template: `
    <ul>
      <li class="bounceInLeft animated" *ngFor="let todo of todos">{{todo.title}}</li>
    </ul>
  `,
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  todos = [];
  constructor() { }

  ngOnInit() {
    this.todos = JSON.parse(window.localStorage.getItem('todos')) || [];
  }

  addTodo(todo:string) {
    this.todos.push({title: todo})
    window.localStorage.setItem('todos', JSON.stringify(this.todos))
  }

}
