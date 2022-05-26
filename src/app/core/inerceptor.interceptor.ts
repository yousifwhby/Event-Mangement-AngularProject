import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class InerceptorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let token = sessionStorage.getItem("token");
    if(token){
      let clonedReq = request.clone({
        headers: request.headers.set("Authorization", "Bearer "+token)
      });
      return next.handle(clonedReq);
    }
    else{
      return next.handle(request);
    }
  }
 }

