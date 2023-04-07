import { ChangeDetectionStrategy, ChangeDetectorRef, Component, NgZone, OnInit } from '@angular/core';
import { Todo } from './todo';
import { filterByDone } from './filterByDone';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class TodoListComponent implements OnInit {

  todos: Todo[] = [];
  newTodoText: string = '';
  showDone!: string;
  constructor(private ngZone: NgZone){

  }
  ngOnInit(): void {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      this.todos = JSON.parse(savedTodos);
    }
  }

  addTodo(): void {
      if(!(this.newTodoText.length===0)){
        const newTodo: Todo = { text: this.newTodoText, done: false };
        this.todos.push(newTodo);
        this.saveTodos();
        this.newTodoText = '';
      }
      }

  updateTodoStatus(todo: Todo): void {
    
    this.saveTodos();
  }

  saveTodos(): void {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  filterByDone = filterByDone;

}

