import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  apiDomain = 'http://localhost:8080';

  helloWorld() {
    debugger
    try {
      return this.http.get(`${this.apiDomain}/`).toPromise();
    } catch {
      throw Error;
    }
  }

  postCoupons() {
    debugger
    try {
      return this.http.post(`${this.apiDomain}/coupons`,'jimi').toPromise();
    } catch {
      throw Error;
    }
  }
}
