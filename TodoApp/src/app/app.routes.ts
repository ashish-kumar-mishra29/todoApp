import { Routes } from '@angular/router';
import { TodayComponent } from './today/today.component';
import { MonthlyComponent } from './monthly/monthly.component';

export const routes: Routes = [
  {
    path:'',
    component:TodayComponent
  },
  {
    path: 'today',
    component: TodayComponent,
    
  },
  {
    path: 'monthly',
    component: MonthlyComponent,
  },
];
