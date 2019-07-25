import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product.model';
import { MatSnackBar, MatDialog } from '@angular/material';
import { SnackbarComponent } from '../dialogs/snackbar.component';
import { ProductUpdateComponent } from '../dialogs/product-update.component';
@Component({
  selector: 'app-product-manager',
  templateUrl: './product-manager.component.html',
  styleUrls: ['./product-manager.component.less']
})
export class ProductManagerComponent implements OnInit {
  products: Array<Product>;
  onDeleteMessage: string;
  constructor(
    private productService: ProductService,
    private snackBar: MatSnackBar,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.updateProductList();
  }

  updateProductList() {
    this.productService.getAll().subscribe(products => {
      this.products = products;
    });
  }

  deleteProduct(id) {
    this.productService.deleteProduct(id).subscribe(() => {
      this.products = this.products.filter(x => x.id !== id);
      this.snackBar.openFromComponent(SnackbarComponent, {
        data: {
          message: 'Product has been deleted'
        }
      });
    });
  }

  addProduct(product) {
    this.productService.addProduct(product).subscribe(() => {
      this.updateProductList();
      this.snackBar.openFromComponent(SnackbarComponent, {
        data: {
          message: 'Product added'
        }
      });
    });
  }

  addProductDialogOpen(): void {
    const dialogRef = this.dialog.open(ProductUpdateComponent, {
      width: '350px',
      data: {
        isAdding: true
      }
    });

    dialogRef.afterClosed().subscribe(product => {
      if (product) {
        this.addProduct(product);
      }
    });
  }
}
