
import { Injectable } from "@angular/core";
import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';
import { Observable, catchError, throwError } from "rxjs";
import { IProduct } from "../models/product";

@Injectable({
  providedIn: 'root'
})
export class ProductsServices {
  constructor(private http: HttpClient) {

  }

  getAll(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>('https://fakestoreapi.com/products', {
      params: new HttpParams({
        fromObject: {limit: 5}
      })
    }).pipe(
      catchError(this.errorHandler)
    )
  }

  private errorHandler(error: HttpErrorResponse) {
    
    return throwError(() => error.message)
  }

}