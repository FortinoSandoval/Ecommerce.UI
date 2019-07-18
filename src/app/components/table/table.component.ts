import { DeleteDialogComponent } from './../dialogs/delete-dialog.component';
import {
  Component,
  OnInit,
  Input,
  ViewChild,
  SimpleChanges,
  Output,
  EventEmitter
} from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.less']
})
export class TableComponent implements OnInit {
  @Input() items: any[];
  @Input() displayedColumns: string[];
  @Input() actions: string[];
  @Output() deleteItem = new EventEmitter();
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  dataSource;
  columns;

  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  handleActions(actions) {
    if (actions.length === 0) return;
    actions.forEach((action, index) => {
      action.toLowerCase();
      if (action !== 'delete' && action !== 'update') {
        actions.splice(index, 1);
      }
    });
    this.displayedColumns.push('actions');
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.items && changes.items.currentValue) {
      this.dataSource = new MatTableDataSource<Product>(this.items);
      this.dataSource.paginator = this.paginator;
    }
    if (changes.displayedColumns && changes.displayedColumns.currentValue) {
      this.columns = this.displayedColumns;
    }
    if (changes.actions && changes.actions.currentValue) {
      this.handleActions(this.actions);
    }
  }

  delete(id) {
    this.deleteItem.emit(id);
  }

  update(id) {
    console.log(id);
    // update by id
  }

  deleteDialogOpen(id): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '250px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(answer => {
      if (answer) {
        this.delete(id);
      }
    });
  }
}
