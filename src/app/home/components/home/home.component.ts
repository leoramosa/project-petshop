import { Component, OnInit, Inject, AfterViewInit } from "@angular/core";
import Swiper from "swiper/bundle";
import Glide, { Controls, Breakpoints } from "@glidejs/glide";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit, AfterViewInit {
  mySwiper: Swiper;
  myGlide: Glide;

  constructor() {}

  ngAfterViewInit(): void {
    this.mySwiper = new Swiper(".swiper-container", {
      // Optional parameters

      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,

      // If we need pagination
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },

      // Navigation arrows
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },

      // And if we need scrollbar
      scrollbar: {
        el: ".swiper-scrollbar",
      },
    });
    var sliders = document.querySelectorAll(".glide");

    for (var i = 0; i < sliders.length; i++) {
      var glide = new Glide(sliders[i], {
        // options
      });

      glide.mount();
    }
  }

  ngOnInit() {}
}
