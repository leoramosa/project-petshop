import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnDestroy
} from '@angular/core';

import { Product, Color } from '../../../core/models/product.model';
import { ColorService } from './../../../core/services/color/color.service';
import {MatSnackBar} from '@angular/material/snack-bar';

interface Food {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  colores: Color[] = [];

  @Input() product: Product;
  @Output() productClicked: EventEmitter<any> = new EventEmitter();
  panelOpenState = false;

  foods: Food[] = [
    {value: '1', viewValue: 'Steak'},
    {value: '2', viewValue: 'Pizza'},
    {value: '3', viewValue: 'Tacos'}
  ];

  constructor(
    private colorService: ColorService,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit() {
    this.fetchColors();
  }

  fetchColors() {
    this.colorService.getAllColors()
    .subscribe(colores => {
      this.colores = colores;
    });
  }

  openSnackBar(message: string, action: string, className: string ) {
    this.snackBar.open(message, action, { duration: 2000, verticalPosition: 'bottom', horizontalPosition: 'end',
    panelClass: [className]
     }, );
  }

}
