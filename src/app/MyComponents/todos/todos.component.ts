import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/modal/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos:Todo[] ;
  localitem:string;

  constructor() {

    this.localitem=localStorage.getItem("todos");
    if(this.localitem==null){
      this.todos=[];
    }
    else{
      this.todos=JSON.parse(this.localitem);
    }
  }

  ngOnInit(): void {
  }

  onAddToDo(todo:Todo){
    this.todos.push(todo);
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }

  deleteTodo(todo:Todo){
    console.log(todo);
    let index= this.todos.indexOf(todo);
    this.todos.splice(index,1);
    localStorage.setItem("todos",JSON.stringify(this.todos));

  }

  onToggle(todo:Todo){
    let index= this.todos.indexOf(todo);
    this.todos[index].active=!this.todos[index].active;
    localStorage.setItem("todos",JSON.stringify(this.todos));

  }

}
