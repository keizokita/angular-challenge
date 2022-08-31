import { Products } from './products';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private readonly API = 'https://crudapi.co.uk/api/v1/probe'

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Products[]>(this.API)
    .pipe(
      tap(console.log)
    )
  }
}
