import { NgForm } from '@angular/forms';
import { AuthService } from './../../services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  user = {
    email: '',
    password: '',
  };

  constructor(private authService: AuthService) {}

  onSubmit(loginForm: NgForm) {
    console.log('User:', this.user);
    this.authService.login(this.user.email, this.user.password);
  }
}
