import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product.model';
@Component({
  selector: 'app-product-manager',
  templateUrl: './product-manager.component.html',
  styleUrls: ['./product-manager.component.less']
})
export class ProductManagerComponent implements OnInit {
  products: Array<Product>;
  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getAll().subscribe(products => {
      this.products = products;
    });
  }

  deleteProduct(id) {
    this.productService.deleteProduct(id).subscribe(() => {
      this.products = this.products.filter(x => x.id !== id);
    });
  }
}
