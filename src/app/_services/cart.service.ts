import { Injectable } from '@angular/core';
import { KIT, CUSTOMER, PURCHASE } from '../_models/kit'
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items : KIT[] = [];
  wishlist = [];
  data : PURCHASE;
  customer : CUSTOMER;

  constructor(private http: HttpClient) { 
    //this.wishlist = JSON.parse(localStorage.getItem('kit'));
  } 

  addToCart(kit) {
    this.items.push(kit);
  }

  addToWishList(kit){
    this.wishlist.push(kit);
    //localStorage.setItem('kit', JSON.stringify(this.wishlist));
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

  purchase(Customer, Kit: KIT[], poNum){
    const customer: CUSTOMER = Customer;
    const kit: KIT[] = Kit;
    const ponum: Number = poNum;
    var data: PURCHASE;
    JSON.stringify(kit);
    data = {
      customer,
      kit,
      ponum
    }
    console.log("SERVICE RUNNING")
    console.log(kit);
    console.log(data);
    return this.http.post(`http://3.135.129.218:5000/purchase`, data);
  }
  getPO(): Observable<number> {
    return this.http.get<number>('http://3.135.129.218:5000/poNum')
      .pipe();
  }
}
