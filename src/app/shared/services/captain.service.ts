import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CaptainService {

  constructor(private http: HttpClient, private router: Router) {

  }

  index(): any{
    return this.http
    .get<any>('http://localhost:3000/api/v1/captain')
    .subscribe((response)=>{
      console.log (response);
    })
  }


}
