import { Injectable } from '@angular/core';
import { KIT } from '../_models/kit'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];
  wishlist = [];
  constructor(private http: HttpClient) { } 

  addToCart(kit) {
    this.items.push(kit);
  }

  addToWishList(kit){
    this.wishlist.push(kit);
  }

  getItem() {
    return this.items;
  }

  getWishList() {
    return this.wishlist;
  }

  // Pushes Kit information to Backend

  clearCart(){
    this.items = [];
    return this.items;
  }

  clearWishList(){
    this.wishlist = [];
    return this.wishlist;
  }

  purchase(kit: KIT[]){
    return this.http.post(`http://localhost:5000/purchase`, kit);
  }


}
