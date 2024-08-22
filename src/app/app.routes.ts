import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/todos',
    pathMatch: 'full' // 
  },
  {
    path: 'todos',
    // lazy loading
    loadChildren: () => import('./pages/todos/todos.module').then(m => m.TodosModule),
  },
];
