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
    return this.http.post(`http://3.135.129.218:5000/purchase`, data);
  }
  purchasedetail(kitid, kitname, ponum){
    console.log("Purchaseservie")
    return this.http.post(`http://3.135.129.218:5000/purchasedetail`, {ponum, kitname, kitid});
  }
  getPO(): Observable<number> {
    return this.http.get<number>('http://3.135.129.218:5000/poNum')
      .pipe();
  }
  getOrders(userID: string): Observable<PURCHASEINFO[]> {
    const options = userID ?
      { params: new HttpParams().set('userID', userID) } : {};

    return this.http.get<PURCHASEINFO[]>(`http://3.135.129.218:5000/getOrders`, options)
      .pipe();
  }


}
