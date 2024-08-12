import { Routes } from '@angular/router';
import { TodayComponent } from './today/today.component';
import { MonthlyComponent } from './monthly/monthly.component';

export const routes: Routes = [

  {
    path: 'today',
    component: TodayComponent,
    
  },
  {
    path: 'monthly',
    component: MonthlyComponent,
    title: 'Month',
  },
];
