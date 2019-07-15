import {
  Component,
  OnInit,
  Input,
  ViewChild,
  SimpleChanges
} from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.less']
})
export class ProductsTableComponent implements OnInit {
  @Input() products: Array<Product>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  productItems;

  displayedColumns: string[] = [
    'name',
    'description',
    'quantity',
    'price',
    'category'
  ];
  constructor() {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    if (changes.products && changes.products.currentValue) {
      this.productItems = new MatTableDataSource<Product>(this.products);
      this.productItems.paginator = this.paginator;
    }
  }
}
