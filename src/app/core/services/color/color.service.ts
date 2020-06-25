import { Injectable } from '@angular/core';
import { Product, Color } from './../../models/product.model';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  constructor(
    private http: HttpClient
  ) { }

  getAllColors() {
    return this.http.get<Color[]>(`${environment.url_api}/color/`);
  }

}
