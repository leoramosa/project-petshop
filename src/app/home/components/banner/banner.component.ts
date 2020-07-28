import { Component, OnInit } from "@angular/core";
import { ProductsService } from "../../../core/services/products/products.service";
import { Product } from "../../../core/models/product.model";

@Component({
  selector: "app-banner",
  templateUrl: "./banner.component.html",
  styleUrls: ["./banner.component.scss"],
})
export class BannerComponent implements OnInit {
  products: Product[] = [];

  // por mientras

  constructor(private productService: ProductsService) {}

  fetchProducts() {
    this.productService.getAllProducts().subscribe((products) => {
      this.products = products;
    });
  }

  ngOnInit() {
    this.fetchProducts();
  }
}
