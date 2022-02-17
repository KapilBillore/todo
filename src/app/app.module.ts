import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodosComponent } from './MyComponents/todos/todos.component';
import { TodoItemComponent } from './MyComponents/todo-item/todo-item.component';
import { AddToDoComponent } from './MyComponents/add-to-do/add-to-do.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoItemComponent,
    AddToDoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
