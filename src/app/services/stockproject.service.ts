import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { StockData } from '../../models/stockproject.model';

@Injectable({
  providedIn: 'root'
})
export class StockprojectService {
  constructor(private http: HttpClient) {}

  getStockData(CompanyName: String): Observable<StockData> {
    return this.http.get<StockData>(environment.StockApiBaseUrl, {
       headers: new HttpHeaders()
       .set(environment.XRapidAPIHostHeaderName, environment.XRapidAPIHostHeaderValue)
       .set(environment.XRapidAPIKeyHeaderName, environment.XRapidAPIKeyHeaderValue),
       params: new HttpParams()
       .set('interval', '5min')
       .set('function', 'TIME_SERIES_INTRADAY')
       .set('symbol', 'MSFT')
       .set('datatype', 'json')
       .set('output_size', 'compact')

    })
  }
}