import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from './../models/product.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Product[]>(`${environment.apiUrl}/products`);
  }

  deleteProduct(id) {
    return this.http.delete(`${environment.apiUrl}/products/${id}`);
  }

  addProduct(product) {
    return this.http.post<Product>(`${environment.apiUrl}/products/`, product);
  }
}
