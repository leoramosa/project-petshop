import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ProductsService } from './../../../core/services/products/products.service';
import { Product } from './../../../core/models/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: Product;

  constructor(
    private router: ActivatedRoute,
    private productsService: ProductsService
  ) { }

  ngOnInit() {
    this.router.params.subscribe((params: Params) => {
      const id = params.id;
      this.fetchProduct(id);
    });
  }

  fetchProduct(id: number) {
    this.productsService.getProduct(id)
    .subscribe(product => {
      this.product = product;
    });
  }

  /* crearProduct() {
    const newProduct: Product = {
      id: '15455',
      title: 'nuevo desde angular',
      image: 'assets/images/camiseta.png',
      price: 300,
      description: 'nuevo producto'
    };
    this.productsService.createProduct(newProduct)
    .subscribe(product => {
      console.log(product);
    });
  } */


}
