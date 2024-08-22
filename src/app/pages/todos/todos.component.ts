import {Component, OnInit} from '@angular/core';
import {TodoService} from "./services/todo.service";
import {Todo} from "./model/todo";
import {filter, map, Subscriber, Subscription} from "rxjs";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent implements OnInit{

  todos!: Todo[];
  twoWayData: string = 'Two Way';

  constructor(
    private readonly todoService: TodoService
  ) {
  }

  ngOnInit(): void {
    this.fetchData()
    this.todoService.todoSubject.subscribe(res => {
      console.log('todos consumer:' + res)
    })
  }

  clickMe(count: number): void {
    this.todoService.todoSubject.next(count)
  }

  fetchData(): void {
   const subscribe: Subscription = this.todoService.getAllTodos()
      .pipe(
        map(res => {
          return res.map((val: any) => val.id)
        }),
        filter(filRes => {
          console.log(filRes[0])

          return filRes
        })
      )
      .subscribe({
        next: (res) => {
          console.log(res)
        },
        error: (err) => {
          console.log(err)
        }
      })

    subscribe.unsubscribe()
  }
}
