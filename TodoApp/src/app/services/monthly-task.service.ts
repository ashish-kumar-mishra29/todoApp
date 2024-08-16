import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
const baseUrl = "https://localhost:7154/api/TodoMonthly";
@Injectable({
  providedIn: 'root'
})

export class MonthlyTaskService {

  constructor(private http:HttpClient) { }
 

  getTodo() {
    return this.http.get(baseUrl);
  }
  addTask(task:string){
    const data = {monthlyTask:task}
    const headers = new HttpHeaders({
      'Content-type' : 'application/json',
    })
    return this.http.post(baseUrl,data,{headers});
  }
  deleteTask(id:number){
    return this.http.delete(baseUrl +`/${id}`);
  }
}
