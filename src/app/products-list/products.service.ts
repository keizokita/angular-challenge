import { Products } from './products';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  delProduct(id: any) {
    throw new Error('Method not implemented.');
  }

  private readonly API = 'http://localhost:3000/products';
  postProducts: any;

  constructor(private http: HttpClient) { } 

  list() {
    return this.http.get<Products[]>(this.API);
  }

  loadByID(id: any) {
    return this.http.get<Products>(`&{this.API}/${id}`).pipe(take(1));
  }

  create(product: any) {
    return this.http.post(this.API, product).pipe(take(1));
  }

  update(product: any) {
    return this.http.put(`&{this.API}/${product.id}`, product).pipe(take(1));
  }

  save(product: any) {
    if (product.id) {
      return this.update(product);
    }
    return this.create(product);
  }
}

