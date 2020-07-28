import { Component, OnInit, AfterViewInit } from "@angular/core";
import { ProductsService } from "../../../core/services/products/products.service";
import { Product } from "../../../core/models/product.model";
import { SwiperOptions } from "swiper";
@Component({
  selector: "app-banner",
  templateUrl: "./banner.component.html",
  styleUrls: ["./banner.component.scss"],
})
export class BannerComponent implements OnInit {
  config: SwiperOptions = {
    pagination: { el: ".swiper-pagination", clickable: true },
    autoHeight: true,
    allowTouchMove: true,
    autoplay: {
      delay: 6000,
      disableOnInteraction: true,
    },
    breakpoints: {
      1024: {
        slidesPerView: 4,
      },
      500: {
        slidesPerView: 3,
      },
      400: {
        slidesPerView: 2,
      },
      300: {
        slidesPerView: 1,
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop: true,
  };
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
