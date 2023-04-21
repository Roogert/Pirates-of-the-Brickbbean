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
    const user = this.storage.getItem('user')
    const token = this.storage.getItem('accessToken')
    return this.authService.user.pipe(
      take(1),
      exhaustMap((user) => {
        // Make sure we have a user
        if (!user) return next.handle(req);

        // Modify the req to have access to the token
        const modifiedReq = req.clone({
          setHeaders: { 'Authorization': `Bearer ${token}`},
        });

        // Return the modified request
        return next.handle(modifiedReq);
      })
    );
  }
}
