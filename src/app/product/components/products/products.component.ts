import { Component, OnInit } from "@angular/core";

import { Product } from "./../../../core/models/product.model";
import { Categoria } from "./../../../core/models/categoria.model";
import { ProductsService } from "./../../../core/services/products/products.service";
import { CategoriaService } from "./../../../core/services/categoria/categoria.service";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.scss"],
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  categorias: Categoria[] = [];

  constructor(
    private productService: ProductsService,
    private categoriaService: CategoriaService
  ) {}

  ngOnInit() {
    this.fetchProducts();
    this.fetchCategorias();
  }

  clickProduct(id: number) {
    console.log("product");
    console.log(id);
  }

  fetchProducts() {
    this.productService.getAllProducts().subscribe((products) => {
      this.products = products;
    });
  }

  fetchCategorias() {
    this.categoriaService.getAllProducts().subscribe((categorias) => {
      this.categorias = categorias;
    });
  }
}
