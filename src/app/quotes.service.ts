import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { map } from 'rxjs/operator/map';
import { ObservableMedia } from '@angular/flex-layout';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class QuotesService {
  constructor(private http: HttpClient) {}

  getRandomQuote(): Observable<any> {
    return this.http.get(
      'https://quotes.rest/quote/search.json?category=love&api_key=vjzNVG2xJ00mWtqipQDRAgeF&maxlength=150'
    );
  }
}
