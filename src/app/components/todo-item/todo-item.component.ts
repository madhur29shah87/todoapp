import { Component, OnInit, Input, EventEmitter, Output  } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { TodoService } from '../../services/todo.service'

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();
  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  // Set dynamic classes
  setClasses() {
    let dynamicClasses = {
      todo: true,
      'is-complete': this.todo.completed
    }
    return dynamicClasses;
  }

  onToggle(todo){
    // handle ui
    todo.completed = !todo.completed;
    // call service 
    this.todoService.toggleCompleted(todo).subscribe( todo => {
      console.log(todo)
    });
  }

  delete(todo){
    console.log("delete");
    this.deleteTodo.emit(todo);
  }

}
