import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodosRoutingModule } from './todos-routing.module';
import { TodosComponent } from './todos.component';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';
import {TodoService} from "./services/todo.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    TodosComponent,
    ListComponent,
    FormComponent,
  ],
  imports: [
    CommonModule,
    TodosRoutingModule,
    HttpClientModule
  ],
  providers: [
    TodoService
  ]
})
export class TodosModule { }
