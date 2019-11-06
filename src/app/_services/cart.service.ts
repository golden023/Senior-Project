import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { KIT, Kit } from '../_models/kit';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];

  constructor(private http: HttpClient){}

  addToCart(kit) {
    this.items.push(kit);
  }
  getItem() {
    return this.items;
  }

  pushCart (kitID: string): Observable<string>  {
    const options = kitID ?
      { params: new HttpParams().set('kitID', kitID) } : {};

    return this.http.post<string>(`http://localhost:5000/api/cart`, options)
      .pipe();
  }

  clearCart(){
    this.items = [];
    return this.items;
  }
}
