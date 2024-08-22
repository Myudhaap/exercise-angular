import { Injectable } from '@angular/core';
import {map, Observable, Subject, Subscriber} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Todo, TodoJson} from "../model/todo";

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todoSubject: Subject<number> = new Subject<number>()

  constructor(
    private http: HttpClient
  ) { }

  getAllTodos(): Observable<any> {
    return this.http.get<any>('https://jsonplaceholder.typicode.com/todos')

    /*
    return new Observable<Todo>((sub: Subscriber<Todo>) => {
      try{
        sub.next({id: 1, todo: "todo1", isActive: true})

        console.log("Todo 1 has send")

        sub.next({id: 2, todo: "todo2", isActive: false})

        console.log("Todo 2 has send")

        sub.complete()

        sub.next({id: 3, todo: "todo3", isActive: false})

        console.log("Todo 3 has send")
      }catch (e){
        sub.error(e)
      }
    })
     */
  }
}
