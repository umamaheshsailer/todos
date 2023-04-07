import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { FormsModule, } from '@angular/forms';
import { filterByDone } from './todo-list/filterByDone';
routes:[]
@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    filterByDone,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
