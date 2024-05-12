import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  apiKey = 'c9f0c2fab2a547d7a200c3ad'; // Tu clave de API de ExchangeRate-API
  baseUrl = 'https://v6.exchangerate-api.com/v6/';

  constructor(private http: HttpClient) { }

  getExchangeRates(baseCurrency: string): Observable<any> {
    return this.http.get(`${this.baseUrl}${this.apiKey}/latest/${baseCurrency}`);
  }
}
