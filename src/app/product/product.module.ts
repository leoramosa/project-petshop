import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavegationComponent } from './components/navegation/navegation.component';
import { ProductComponent } from './components/product/product.component';
import { ProductsComponent } from './components/products/products.component';

import { MaterialModule } from './../material/material.module';
import { ProductRoutingModule } from './product-routing.module';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';



@NgModule({
  declarations: [
    NavegationComponent,
    ProductComponent,
    ProductsComponent,
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
