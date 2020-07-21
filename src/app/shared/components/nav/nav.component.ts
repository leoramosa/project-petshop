import { Component, Inject } from "@angular/core";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { Observable } from "rxjs";
import { map, shareReplay } from "rxjs/operators";
import { DialogModalComponent } from "./../dialog-modal/dialog-modal.component";
import { CartService } from "./../../../core/services/cart.service";
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.scss"],
})
export class NavComponent {
  total$: Observable<number>;
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    public dialog: MatDialog,
    private cartService: CartService
  ) {
    this.total$ = this.cartService.cart$.pipe(
      map((products) => products.length)
    );
  }

  openDialog() {
    this.dialog.open(DialogModalComponent, {
      position: { top: "0%", right: "0%" },
      height: "100vh",
      width: "400px",
    });
  }
}
