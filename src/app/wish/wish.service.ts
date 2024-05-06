import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from '@angular/common/http';
import {WishItem} from "../../shared/models/wishItem";
import {catchError} from 'rxjs/operators';
import {throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WishService {

  constructor(private http: HttpClient) {
    console.log("WishService is being instantiated.");
  }

  private getStandardOptions() : any {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
  }


  getWishes() {
    let options = this.getStandardOptions();

    //adds the ?format=json into the url link
    options.params = new HttpParams({
      fromObject : {
        format: 'json'
      }
    });
    return this.http.get('assets/wishes.json', options).pipe(catchError(this.handleError));
  }

  private handleError(error : HttpErrorResponse) {
    if (error.status === 0) {
      console.error('There is an issue with client or network: ', error.error);
    } else {
      console.error('Server-side error: ', error.error);
    }

    return throwError(() => new Error('Unable to retrieve default wishes from server'));
  }

  //making private since this wouldn't actually work.
  //just used to show how to add items from the server
  private addWish(wish: WishItem) {
    let options = this.getStandardOptions();
    options.headers = options.headers.set('Authorization', 'auth-value');
    this.http.post('assets/wishes.json', wish, options);
  }
}
