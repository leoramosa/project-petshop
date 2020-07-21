import { Component, OnInit } from "@angular/core";
import { Product } from "./../../../core/models/product.model";
import { CartService } from "./../../../core/services/cart.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-dialog-modal",
  templateUrl: "./dialog-modal.component.html",
  styleUrls: ["./dialog-modal.component.scss"],
})
export class DialogModalComponent implements OnInit {
  products$: Observable<Product[]>;
  constructor(private cartService: CartService) {
    this.products$ = this.cartService.cart$;
  }

  ngOnInit(): void {}
}
