import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { BannerComponent } from "./components/banner/banner.component";
import { HomeComponent } from "./components/home/home.component";

import { HomeRoutingModule } from "./home-routing.module";
import { SharedModule } from "./../shared/shared.module";
import { BannerProductsComponent } from "./components/banner-products/banner-products.component";
@NgModule({
  declarations: [BannerComponent, HomeComponent, BannerProductsComponent],
  imports: [CommonModule, HomeRoutingModule, SharedModule],
})
export class HomeModule {}
