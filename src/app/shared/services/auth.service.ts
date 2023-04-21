import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { User } from '../User/user.model';
import { get } from 'http';
import { from } from 'rxjs';
import { LocalStorageService } from './local-storage.service';

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
              private router: Router,
              private storage: LocalStorageService) {}

  user = new BehaviorSubject<any>(this.storage.getItem('currentUser'));



  setCurrentUser(user: User) {
    this.user.next(user) // sets the currentUserSubject
  }

  login(email: string, password: string) {
    return this.http
      .post<LoginResponse>('http://localhost:3000/api/v1/users/login', {
        email,
        password,
        password_confirmation: password,
      })
      .subscribe((response: any) => {
        this.setCurrentUser(response.payload.user);
        this.storage.setItem('currentUser', response.payload.user)
        this.router.navigate(['']).then(r => {
          return r
        });
      });
  }

  logout() {
    return this.http
      .delete('http://localhost:3000/api/v1/users/logout')
      .subscribe(() => {
        this.user.next(null);
        this.storage.removeItem('currentUser');
      });
  }

  isLoggedIn() {}
}
