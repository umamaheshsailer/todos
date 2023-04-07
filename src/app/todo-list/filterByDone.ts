import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './todo';

@Pipe({
  name: 'filterByDone',
  pure:false
})
export class filterByDone implements PipeTransform {
  transform(todos: Todo[], showDone: string): Todo[] {
    if (showDone ==="Done") {
        return todos.filter(todo => todo.done);
    } else if(showDone=="Todo"){
      return todos.filter(todos=>!todos.done)
    }
    else
    return todos
  }
}
