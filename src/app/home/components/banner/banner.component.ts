import { Component, OnInit, AfterViewInit } from "@angular/core";
import { ProductsService } from "../../../core/services/products/products.service";
import { Product } from "../../../core/models/product.model";
import Swiper from "swiper";
@Component({
  selector: "app-banner",
  templateUrl: "./banner.component.html",
  styleUrls: ["./banner.component.scss"],
})
export class BannerComponent implements OnInit, AfterViewInit {
  mySwiper: Swiper;
  products: Product[] = [];
  images: string[] = [
    "assets/img/banner-1.jpg",
    "assets/img/banner-2.jpg",
    "assets/img/banner-3.jpg",
  ];
  // por mientras

  constructor(private productService: ProductsService) {}

  ngOnInit() {
    this.fetchProducts();
  }

  fetchProducts() {
    this.productService.getAllProducts().subscribe((products) => {
      this.products = products;
    });
  }

  ngAfterViewInit() {
    this.mySwiper = new Swiper(".swiper-container.one", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
      },
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    });
  }
}
