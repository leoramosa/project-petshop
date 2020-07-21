import { DialogModalComponent } from "./../dialog-modal/dialog-modal.component";
import { MatDialog } from "@angular/material/dialog";
import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Observable } from "rxjs";
import { CartService } from "./../../../core/services/cart.service";
import { map } from "rxjs/operators";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  total$: Observable<number>;

  constructor(public dialog: MatDialog, private cartService: CartService) {
    this.total$ = this.cartService.cart$.pipe(
      map((products) => products.length)
    );
  }

  openDialog() {
    this.dialog.open(DialogModalComponent);
  }

  ngOnInit(): void {}
}
