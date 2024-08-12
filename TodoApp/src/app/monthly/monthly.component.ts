import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TodoListServiceService } from '../todo-list-service.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
@Component({
  selector: 'app-monthly',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatButtonModule,
  ],
  templateUrl: './monthly.component.html',
  styleUrl: './monthly.component.css',
  providers: [TodoListServiceService],
})
export class MonthlyComponent {
  list: string[] = [];
  constructor(private _todoTask: TodoListServiceService) {
    _todoTask.getTask();
  }

  add(val: any) {
    this._todoTask.addTask(val);
    this.list = this._todoTask.getTask();
  }
  readonly dialog = inject(MatDialog);

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(deleteDialog, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}
@Component({
  selector: 'dialog-animations-example-dialog',
  templateUrl: 'deleteDialog.html',
  standalone: true,
  imports: [MatButtonModule, MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class deleteDialog {
  readonly dialogRef = inject(MatDialogRef<deleteDialog>);
}
