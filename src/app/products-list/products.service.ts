import { Products } from './products';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  formValue!: FormGroup;
  postProducts(productsList: Products) {
    throw new Error('Method not implemented.');
  }
  delProduct(id: any) {
    throw new Error('Method not implemented.');
  }

  private readonly API = 'http://localhost:3000/products';

  constructor(private http: HttpClient) { } 

  list() {
    return this.http.get<Products[]>(this.API);
  }

  loadByID(id: any) : Observable<Products[]> {
    return this.http.get<Products[]>(`${this.API}/${id}`);
  }

  create(product: any) {
    return this.http.post(this.API, product).subscribe(
      a => console.log(a)
      );
  }

  update(product: any) {
    return this.http.put(`${this.API}/${product.id}`, product).subscribe(
      () => {
        
        this.formValue.reset();
      }
      
    );
  }

  save(product: any) {
    if (product.id == '') {
      return this.create(product);
    } else {
      return this.update(product);
    }
  }

  remove(id: number) {
    console.log(id);
    this.http.delete(`${this.API}/${id}`).subscribe(res => {
      console.log(res)
      this.updateForm
    }
    
   
    );
  }

  updateForm(product: any){
    this.formValue.patchValue({
      id: product.id,
      name: product.name,
      brand: product.brand,
      price: product.price,
      inStrorage: product.inStorage,
      minStrorage: product.minStorage
    });
  }
}

