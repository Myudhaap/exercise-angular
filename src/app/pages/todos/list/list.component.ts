import {
  AfterViewInit,
  Component, EventEmitter,
  inject,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import {TodoService} from "../services/todo.service";
import {Todo} from "../model/todo";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy{
  count: number = 1;

  @Input() todos: Todo[] = [];
  @Output() clickMeChange: EventEmitter<number> = new EventEmitter();

  @Input() twoWay: string = '';
  @Output() twoWayChange: EventEmitter<string> = new EventEmitter();

  constructor(
    private todoService: TodoService
  ) {
    console.log("Constructor has run")
  }

  ngOnInit(): void {
    console.log("On Init has run")
  }

  ngAfterViewInit(): void {
    console.log("On After View Init has run")
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("On Changes has run")
  }

  ngOnDestroy(): void {
    console.log("On Destroy has run")
  }

  onClick(): void {
    this.clickMeChange.emit(this.count++)
    this.twoWayChange.emit('Two Way Has Change')
  }
}
