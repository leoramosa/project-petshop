import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailComponent } from '../product/components/product-detail/product-detail.component';

import { NavegationComponent } from './components/navegation/navegation.component';

const routes: Routes = [
  {
    path: '',
    component: NavegationComponent,
    children: [
      {
        path: '',
        component: ProductsComponent
      },
    ],
  },
  {
    path: ':id',
    component: ProductDetailComponent
  }

];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})

export class ProductRoutingModule {}
