
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
const baseUrl = 'https://localhost:7154/api/Todo';
@Injectable({
  providedIn: 'root',
})

export class DailyTaskService {
private http = inject(HttpClient)
  constructor() {}
  getTodo() {
    return this.http.get(baseUrl);
  }
  addTask(id:number,data:any){
    return this.http.post(baseUrl);
  }
}
