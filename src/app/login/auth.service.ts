import { Users } from './users';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userAuthenticated: boolean = false;

  showMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) {}

  doLogin(users: Users) {
    if (users.email === 'usuario@email.com' && users.password === '123456') {
      this.userAuthenticated = true;

      this.showMenuEmitter.emit(true);

      this.router.navigate(['products-list']);
    } else {
      this.userAuthenticated = false;

      this.showMenuEmitter.emit(false);
    }

    //   switch (this.userAuthenticated) {
    //     case users.email === 'usuario@email.com' && users.password === '123456':
    //       this.router.navigate(['/products-list']);
    //       break;

    //     case users.email === 'usuario2@email.com' && users.password === '123456':
    //       this.router.navigate(['/products-list']);
    //       break;

    //     case users.email === 'usuario3@email.com' && users.password === '123456':
    //       this.router.navigate(['/products-list']);
    //       break;
    //     //this.userAuthenticated = false;
    //   }
    // }
  }
}
