import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { User } from '../User/user.model';
import { get } from 'http';
import { from } from 'rxjs'

interface LoginResponse {
  jwt: string;
}

// export interface AuthResponseData {
//   kind: string;
//   idToken: string;
//   email: string;
//   refreshToken: string;
//   expiresIn: string;
//   localId: string;
//     // For Sign In Only
//   registered?: boolean;
// }

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor (private http: HttpClient,
              private router: Router) {}

  user = new BehaviorSubject<any>(null);

  // getCurrentUser() {
  //   return !!this.user.value;
  // }

  // currentUser():Observable<string> {
  //   return from(this.getCurrentUser)
  // }

  login(email: string, password: string) {
    return this.http
      .post<LoginResponse>('http://localhost:3000/api/v1/users/login', {
        email,
        password,
        password_confirmation: password,
      })
      .subscribe((response: any) => {
        this.user.next(response.payload.user);
        this.router.navigate(['']);
      });
  }

  logout() {
    return this.http
      .delete('http://localhost:3000/api/v1/users/logout')
      .subscribe(() => {
        this.user.next(null);
      });
  }

  isLoggedIn() {}
}
