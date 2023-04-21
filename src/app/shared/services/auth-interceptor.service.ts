import { AuthService } from "./auth.service";
import { Injectable } from "@angular/core";
import { LocalStorageService } from "./local-storage.service";
import {
  HttpHandler,
  HttpInterceptor,
  HttpParams,
  HttpRequest,
} from "@angular/common/http";
import { exhaustMap, take } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
}
)
export class AuthInterceptorService implements HttpInterceptor {
  constructor(private authService: AuthService, private storage: LocalStorageService) {}


  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // List of URLS we do not want to attempt to send our auth header to backend for, in this case just Login route
    const blackListedRoutes = [
      '/login'
    ]

    const user = this.storage.getItem('currentUser') // grab the currentUser from storage

    let found = false;
    // FOR CURRENT USER ONLY
    // CHECKS IF ROUTE IS IN BLACKLISTED ROUTES IF SO WE SET FOUND ABOVE TO TRUE
    for (let i = 0; i < blackListedRoutes.length; i++) {
      if (blackListedRoutes[i] === req['url']) {
        found = true;
        break;
      }
    }
    if (user && user.token && !found) { // if user, token, and a blacklisted route not found, method append the auth header and send to the backend
      const authReq = req.clone({ setHeaders: { 'Authorization': `Bearer ${user.token.value}` } });
      return next.handle(authReq)
    } else {
      return next.handle(req)
    }

  } // END OF INTERCEPTOR

}
