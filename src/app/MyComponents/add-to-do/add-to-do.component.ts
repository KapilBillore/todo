import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/modal/todo';

@Component({
  selector: 'app-add-to-do',
  templateUrl: './add-to-do.component.html',
  styleUrls: ['./add-to-do.component.css']
})
export class AddToDoComponent implements OnInit {

  title:string;
  desc:string;

  @Output() addtodo:EventEmitter<Todo> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){

    const todo = {
      sno: 7,
      title: this.title,
      desc: this.desc,
      active: true
    }
    this.addtodo.emit(todo);

  }

}
