
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
  addTask(task:string){
    const data = {task:task}
    const headers = new HttpHeaders({
      'Content-type' : 'application/json',
    })
    return this.http.post(baseUrl,data,{headers});
  }
}
