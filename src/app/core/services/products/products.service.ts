import { Injectable } from '@angular/core';
import { Product } from './../../models/product.model';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http: HttpClient
  ) { }

  getAllProducts() {
    return this.http.get<Product[]>(`${environment.url_api}/productos/`);
  }

  getProduct(id: number) {
    return this.http.get<Product>(`${environment.url_api}/productos/${id}/`);
  }

}
