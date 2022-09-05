import { Products } from './../products-list/products';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Resolve,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { ProductsService } from '../products-list/products.service';

@Injectable({
  providedIn: 'root',
})
export class ProductsResolverGuard implements Resolve<Products> {
  constructor(private service: ProductsService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    if (route.params && route.params['id']) {
      // return this.service.loadByID(route.params['id']);
    }

    return of({
      id: '',
      name: null,
      brand: null,
      price: '',
      inStorage: '',
      minStorage: '',
    });
  }
}
