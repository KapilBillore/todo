import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/modal/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todoItem:Todo;
  @Output() todoDelete:EventEmitter<Todo>= new EventEmitter();
  @Output() todoCheckbox:EventEmitter<Todo>= new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  onClick(todo:Todo){
    console.log("Delete button is clicked!");
    this.todoDelete.emit(todo);

  }
  onCheckboxClick(todoItem:Todo){
    this.todoCheckbox.emit(todoItem);
    console.log(todoItem);
  }
}
