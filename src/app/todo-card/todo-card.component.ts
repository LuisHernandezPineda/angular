import { Component, OnDestroy, OnInit } from '@angular/core';

interface tasks {
  done:boolean,
  title:string
}

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.css']
})
export class TodoCardComponent implements OnInit, OnDestroy {

  title = "Mis tareas 2";

  tasks: Array<tasks> = [];

  inputTask = 'Nueva Tarea';

  constructor() { 
    
  }

  ngOnInit(): void {
    this.tasks.push({title: "Hacer la tarea", done: false});
    this.tasks.push({title: "Comprar juguetes", done: true});
  }

  ngOnDestroy() {

  }

  addTask() {
    this.tasks.push({title: this.inputTask, done: false});
  }
}
