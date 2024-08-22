import { Component } from '@angular/core';
import {TodoService} from "../services/todo.service";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  constructor(
    private todoService: TodoService
  ) {
    this.todoService.todoSubject.subscribe(res => {
      console.log(`Todos Form Consumer: ${res}`)
    })
  }
}
