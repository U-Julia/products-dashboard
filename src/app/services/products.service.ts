import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, delay, map, tap } from 'rxjs/operators';
import { Product } from '../models/data.model';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private productsUrl = 'api/products';  // URL to web api
  private pageNumber: number = 1;
  private pageLength: number = 4;

  constructor(private http: HttpClient) {
  }

  /** GET products from the server */
  getProducts(): Observable<Product[]> {
    let start: number = (this.pageNumber - 1) * this.pageLength;
    let end: number = this.pageLength * this.pageNumber;
    return this.http.get<Product[]>(this.productsUrl)
      .pipe(
        map((products) => products.slice(start, end)),
        tap(() => this.pageNumber += 1),
        delay(1000),
        catchError(this.handleError<Product[]>('getProducts', []))
      );
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.productsUrl}/${id}`);
  }

  showFirstPage(): void {
    this.pageNumber = 1;
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}

