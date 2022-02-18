import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError} from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SportsService {

  constructor(private http: HttpClient) { }

  sportsUrl: string = 'https://ancient-wood-1161.getsandbox.com:443/results'

  retrieveSports(): Observable<any> {
    return this.http.post(this.sportsUrl, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }).pipe(catchError(this.handleError));
  }

  private handleError(errorResponse: HttpErrorResponse) {
    if (errorResponse.error instanceof ErrorEvent) {
      console.error("Client side error: ", errorResponse.error.message);
    } else {
      console.error("Server side error: ", errorResponse);
    }

    return throwError('There is a problem with the service. We are notified & working on it. Please try again later.');
  }

}
