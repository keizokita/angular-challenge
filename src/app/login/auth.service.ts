import { Products } from '../products-list/products';
import { Users } from './users';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as bootstrap from 'bootstrap';
import { ToastrModule, ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userAuthenticated: boolean = false;

  showMenuEmitter = new EventEmitter<boolean>();
  delProduct: any;

  constructor(private router: Router, private toastr: ToastrService) {}

  doLogin(users: Users) {
    if (users.email === 'usuario@email.com' && users.password === '123456') {
      this.userAuthenticated = true;

      this.showMenuEmitter.emit(true);

      this.router.navigate(['/products-list']);
    } else if (
      users.email === 'usuario1@email.com' &&
      users.password === '123456'
    ) {
      this.userAuthenticated = true;

      this.showMenuEmitter.emit(true);

      this.router.navigate(['/products-list']);
    } else if (
      (users.email !== 'usuario1@email.com' && users.password !== '123456') ||
      (users.email !== 'usuario@email.com' && users.password !== '123456')
    ) {
      this.userAuthenticated = false;
      this.showMenuEmitter.emit(false);
      this.openToast();
    }
  }

  userIsAuthenticated() {
    return this.userAuthenticated;
  }

  openToast() {
    this.toastr.error('Login Inválido', 'Atenção!');
  }
}
