import { Injectable } from '@angular/core';
import { KIT, CUSTOMER, PURCHASE, ORDERDETAIL, PURCHASEINFO } from '../_models/kit'
import { HttpClient, HttpParams } from '@angular/common/http';
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
  orderdetail : ORDERDETAIL;
  orders: PURCHASEINFO[];

  constructor(private http: HttpClient) {} 

  addToCart(kit:KIT) {
    const found = this.items.some(id => id.KitID === kit.KitID)
    if (!found) this.items.push(kit);
    return false;
  }
  removeFromCart(kit:KIT){
    const loc = this.items.indexOf(kit);
    this.items.splice(loc, 1);
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

  purchase(Customer, poNum, userID){
    const customer: CUSTOMER = Customer;
    const ponum: Number = poNum;
    const userid: Number = userID;
    var data: PURCHASE;

    data = {
      customer,
      ponum,
      userid
    }
    return this.http.post(`https://everydaykits.xyz/purchase`, data);
  }
  purchasedetail(kitid, kitname, ponum){
    console.log("Purchaseservie")
    return this.http.post(`https://everydaykits.xyz/purchasedetail`, {ponum, kitname, kitid});
  }
  getPO(): Observable<number> {
    return this.http.get<number>('https://everydaykits.xyz/poNum')
      .pipe();
  }
  getOrders(userID: string): Observable<PURCHASEINFO[]> {
    const options = userID ?
      { params: new HttpParams().set('userID', userID) } : {};

    return this.http.get<PURCHASEINFO[]>(`https://everydaykits.xyz/getOrders`, options)
      .pipe();
  }


}
