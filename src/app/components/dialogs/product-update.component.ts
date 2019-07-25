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

  ngOnInit(): void {
    this.addProductForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      quantity: ['', Validators.required],
      price: ['', Validators.required],
      photoUrl: [''],
      category: ['', Validators.required]
    });
  }

  get f() {
    return this.addProductForm.controls;
  }

  addProduct(): void {
    if (this.addProductForm.invalid) {
      return;
    }
    const product = new Product();

    product.name = this.f.name.value;
    product.category = this.f.category.value;
    product.description = this.f.description.value;
    product.photoUrl = this.f.photoUrl.value;
    product.price = this.f.price.value;
    product.quantity = this.f.quantity.value;

    this.dialogRef.close(product);
  }
}
