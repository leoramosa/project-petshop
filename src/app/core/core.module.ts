import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from './services/products/products.service';
import { CategoriaService } from './services/categoria/categoria.service';
import { ColorService } from './services/color/color.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    ProductsService,
    CategoriaService,
    ColorService
  ]
})
export class CoreModule { }
