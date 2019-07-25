import { Product } from './../../models/product.model';
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-update',
  styleUrls: ['./product-update.component.less'],
  templateUrl: 'product-update.component.html'
})
export class ProductUpdateComponent {
  constructor(
    public dialogRef: MatDialogRef<ProductUpdateComponent>,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
  addProductForm: FormGroup;
  loading = false;
  returnUrl: string;
  invalidCredentials = false;
  allowedUser = true;
  product = new Product();

  categories = [
    { id: 0, name: 'Category 1' },
    { id: 1, name: 'Category 2' },
    { id: 2, name: 'Category 3' },
    { id: 3, name: 'Category 4' },
    { id: 4, name: 'Category 5' }
  ];

  ngOnInit(): void {
    this.addProductForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      quantity: ['', Validators.required],
      price: ['', Validators.required],
      category: ['', Validators.required],
      photoUrl: ['']
    });
  }

  get f() {
    return this.addProductForm.controls;
  }

  addProduct(): void {
    if (this.addProductForm.invalid) {
      return;
    }

    this.product.name = this.f.name.value;
    this.product.category = this.f.category.value;
    this.product.description = this.f.description.value;
    this.product.photoUrl = this.f.photoUrl.value;
    this.product.price = this.f.price.value;
    this.product.quantity = this.f.quantity.value;

    this.dialogRef.close(this.product);
  }
}
