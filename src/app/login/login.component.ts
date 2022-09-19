import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Users } from './users';
import { AuthService } from './auth.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  users: Users = new Users();

  form!: FormGroup;

  @Input() showError?: boolean;
  @Input() msgError?: string;

  constructor(private authService: AuthService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(20),
        ],
      ],
    });
  }

  onSubmit() {
    this.authService.doLogin(this.users);
  }

  verifyValidTouched(campo: any) {
    return !campo.valid && campo.touched;
  }

  aplyCssError(campo: any) {
    return {
      'is-invalid': this.verifyValidTouched(campo),
      'has-feedback': this.verifyValidTouched(campo),
    };
  }
}
