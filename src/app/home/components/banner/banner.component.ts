import { Component, OnInit, AfterViewInit } from "@angular/core";
import { ProductsService } from "../../../core/services/products/products.service";
import { Product } from "../../../core/models/product.model";
import { SwiperOptions } from "swiper";
import Swiper from "swiper";
@Component({
  selector: "app-banner",
  templateUrl: "./banner.component.html",
  styleUrls: ["./banner.component.scss"],
})
export class BannerComponent implements OnInit, AfterViewInit {
  mySwiper: Swiper;
  products: Product[] = [];
  config: SwiperOptions = {
    autoplay: {
      delay: 6000,
      disableOnInteraction: true,
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop: true,
  };

  ngAfterViewInit() {
    this.mySwiper = new Swiper(".swiper-container", {
      pagination: {
        el: ".swiper-pagination",
      },
    });
  }

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
