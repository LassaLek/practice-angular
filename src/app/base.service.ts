import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { log } from './utils/operators';

export class BaseService {

  constructor(private http: HttpClient) {
    console.log('BaseService');
  }

  protected baseGetRequest<T>(url: string): Observable<T> {
    return this.http
      .get<T>(url, { observe: 'response' })
      .pipe(
        log(),
        map(
          (response) => {
            // TODO handle different statuses
            return response.body as T;
          }
        )
      )
      .pipe(
        retry(1), // retry a failed request once
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }
}
