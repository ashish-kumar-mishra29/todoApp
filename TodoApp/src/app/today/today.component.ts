import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { DailyTaskService } from '../services/daily-task.service';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-today',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatButtonModule,
    HttpClientModule
  ],
  templateUrl: './today.component.html',
  styleUrl: './today.component.css',
})
export class TodayComponent{
  tasks: [] | any;
  constructor(private todo:DailyTaskService){}
  ngOnInit():void {
    this.todo.getTodo().subscribe({
      next:(data:any)=>{
        console.log(data);
        this.tasks=data;
      }
    })
  }

  addTasks(task: string) {
      this.todo.addTask(task);
  }
}
