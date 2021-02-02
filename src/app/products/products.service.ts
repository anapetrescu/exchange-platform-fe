import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) { }

  getProducts(): Observable<any> {
    return this.httpClient.get("https://shielded-eyrie-39447.herokuapp.com/api/products/available?userId="
     + localStorage.getItem("user_id"));
  }

  addProduct(product: Product): Observable<any> {
    return this.httpClient.post("https://shielded-eyrie-39447.herokuapp.com/api/products/create",
    product);
  }

  getFeatures(type): Observable<any> {
    return this.httpClient.get("https://shielded-eyrie-39447.herokuapp.com/api/features/mandatory?type="
    + type);
  }

  getProductsFromRange(range):Observable<any> {
    return this.httpClient.get("https://shielded-eyrie-39447.herokuapp.com/api/" +
    "products/range?userAddress=" + localStorage.getItem("address") + "&range=" + range)
  }

}
