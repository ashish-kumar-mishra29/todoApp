import { Injectable } from '@angular/core';

@Injectable()
//{
//   providedIn: 'root',
// }
export class TodoListServiceService {
  list: string[] =[]
  constructor() {}

  addTask(task: string) {
    this.list.push(task);
  }

  getTask() {
    return this.list;
  }
  deleteTask(){
    
  }
}
