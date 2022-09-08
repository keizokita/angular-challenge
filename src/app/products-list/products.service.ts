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
    return this.http.get<Products>(`${this.API}/${id}`);
  }

  create(product: any) {
    return this.http.post(this.API, product).subscribe(
      a => console.log(a)
      );
  }

  update(product: any) {
    return this.http.put(`${this.API}/${product.id}`, product).subscribe(
      b => console.log(b)
    );
  }

  save(product: any) {
    if (product.id) {
      return this.update(product);
    }
    return this.create(product);
  }

  remove(id: any) {
    console.log(id);
    return this.http.delete(`${this.API}/${id}`).subscribe(
    a => console.log(a)
    );
  }

  buy(inStorage: any) {
    this.http.get<Products[]>(this.API);
  }
}

