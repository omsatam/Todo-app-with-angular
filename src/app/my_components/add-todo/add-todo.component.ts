import {  Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Todo } from "../../Todos"
@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  @Output() todoAdd : EventEmitter<Todo> = new EventEmitter;

  title:string;
  desc: string;
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.title);
    console.log(this.desc);
    if ((this.title === undefined || this.desc === undefined) || (this.title === " " || this.desc ===" ")){
      alert("please add todo correctly");
    }
    else{
    const todo = {
      title: this.title,
      desc: this.desc,
      active: true
    }
    this.title = "";
    this.desc = "";
    this.todoAdd.emit(todo)
  }
}
}
