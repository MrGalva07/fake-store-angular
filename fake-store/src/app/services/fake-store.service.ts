import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FakeStoreService {

  constructor(private http: HttpClient) { }

  linkApi: string = 'https://fakestoreapi.com/products'

  getAllProducts(){
    return this.http.get(this.linkApi)
  }
}
