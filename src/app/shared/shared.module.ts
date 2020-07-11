import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";

import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";
import { NavComponent } from "./components/nav/nav.component";

import { MaterialModule } from "./../material/material.module";
import { LayoutModule } from "@angular/cdk/layout";
import { DialogModalComponent } from "./components/dialog-modal/dialog-modal.component";

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    NavComponent,
    DialogModalComponent,
  ],
  entryComponents: [DialogModalComponent],
  exports: [
    HeaderComponent,
    FooterComponent,
    NavComponent,
    ReactiveFormsModule,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    LayoutModule,
    ReactiveFormsModule,
  ],
})
export class SharedModule {}
