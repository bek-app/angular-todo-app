import { Todo, TodosService } from './../shared/todos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss'],
})
export class TodoFormComponent implements OnInit {
  title: string = '';
  constructor(private todosService: TodosService) {}

  ngOnInit(): void {}
  addTodo() {
    const todo: Todo = {
      title: this.title,
      id: Date.now(),
      completed: false,
      date: new Date(),
    };
    if (!this.title) return;
    this.todosService.addTodo(todo);
    this.title = '';
  }
}
