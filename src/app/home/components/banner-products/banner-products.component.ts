import { Component, OnInit, AfterViewInit } from "@angular/core";
import Swiper from "swiper";

@Component({
  selector: "app-banner-products",
  templateUrl: "./banner-products.component.html",
  styleUrls: ["./banner-products.component.scss"],
})
export class BannerProductsComponent implements OnInit, AfterViewInit {
  mySwipertwo: Swiper;

  imagespro: string[] = [
    "assets/img/perro-01.jpg",
    "assets/img/perro-02.jpg",
    "assets/img/perro-03.jpg",
    "assets/img/perro-04.jpg",
    "assets/img/perro-05.jpg",
  ];

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.mySwipertwo = new Swiper(".swiper-container.two", {
      slidesPerView: 3,
      spaceBetween: 10,
      // init: false,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      },
    });
  }
}
