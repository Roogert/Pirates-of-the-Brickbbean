import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

interface LoginResponse {
  jwt:string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }

  private user = new BehaviorSubject<any>(null);

  getCurrentUsers(){
    return !!this.user.value;
  }

  login(email:string, password:string){
    return this.http
    .post<LoginResponse>('http://localhost:3000/api/v1/users/login',{
      email, password, password_confirmation: password,
    })
    .subscribe((response: any) => {
      this.user.next(response.payload.user);
    })
  }

  logout() {
    return this.http
      .delete('http://localhost:3000/api/v1/users/logout')
      .subscribe(() => {
        this.user.next(null);
      });
  }

}
