import { DialogModalComponent } from "./../dialog-modal/dialog-modal.component";
import { MatDialog } from "@angular/material/dialog";
import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(DialogModalComponent);
  }

  ngOnInit(): void {}
}
