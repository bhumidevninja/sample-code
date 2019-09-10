import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  @Output() addTodo: EventEmitter<any> = new EventEmitter();

  title: string;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    if (!this.title || this.title.trim() === '') {
      alert('Why empty to do ?');
      return;
    } else {
      const todo = {
        title: this.title,
        completed: false
      };
      this.title = '';
      this.addTodo.emit(todo);
    }
  }

}
