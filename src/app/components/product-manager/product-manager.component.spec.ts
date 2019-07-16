import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductManagerComponent } from './product-manager.component';
import { MatTableModule, MatPaginatorModule } from '@angular/material';
import { ProductsTableComponent } from '../products-table/products-table.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ProductManagerComponent', () => {
  let component: ProductManagerComponent;
  let fixture: ComponentFixture<ProductManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatTableModule,
        MatPaginatorModule,
        HttpClientModule,
        BrowserAnimationsModule
      ],
      declarations: [ProductManagerComponent, ProductsTableComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
