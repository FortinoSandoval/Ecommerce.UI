import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'delete-dialog',
  templateUrl: 'delete-dialog.html'
})
export class DeleteDialogComponent {
  constructor(public dialogRef: MatDialogRef<DeleteDialogComponent>) {}

  close(value): void {
    this.dialogRef.close(value);
  }
}
