import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './my_components/todos/todos.component';
import { TodoItemComponent } from './my_components/todo-item/todo-item.component';
import { AddTodoComponent } from './my_components/add-todo/add-todo.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './my_components/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoItemComponent,
    AddTodoComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
