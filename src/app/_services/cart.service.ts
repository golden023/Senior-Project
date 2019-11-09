import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];

  addToCart(kit) {
    this.items.push(kit);
  }
  getItem() {
    return this.items;
  }

  clearCart(){
    this.items = [];
    return this.items;
  }

  constructor() { }
}
