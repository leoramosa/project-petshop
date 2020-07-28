import { HomeModule } from "./home/home.module";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LayoutComponent } from "./layout/layout.component";
import { SharedModule } from "./shared/shared.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { CoreModule } from "./core/core.module";
import { NgxUsefulSwiperModule } from "ngx-useful-swiper";

@NgModule({
  imports: [
    NgxUsefulSwiperModule,
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CoreModule,
    HomeModule,
    ,
  ],
  declarations: [AppComponent, LayoutComponent],
  exports: [ReactiveFormsModule, FormsModule, NgxUsefulSwiperModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
