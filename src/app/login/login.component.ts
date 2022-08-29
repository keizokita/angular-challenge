import { Users } from './users';
import { AuthService } from './auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  users: Users = new Users();

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  doLogin(){
    this.authService.doLogin(this.users);
  }

}
