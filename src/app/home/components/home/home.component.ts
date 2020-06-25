import { Component, OnInit, AfterViewInit, Inject } from "@angular/core";
import Swiper from "swiper";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit, AfterViewInit {
  mySwiper: Swiper;

  constructor() {}

  ngOnInit(): void {}

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
