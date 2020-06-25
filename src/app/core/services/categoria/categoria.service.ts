import { Injectable } from '@angular/core';
import { Categoria } from './../../models/categoria.model';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(
    private http: HttpClient
  ) { }

  getAllProducts() {
    return this.http.get<Categoria[]>(`${environment.url_api}/categorias/`);
  }


}
