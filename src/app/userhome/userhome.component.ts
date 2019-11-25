import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '../_models';
import { UserService, AuthenticationService } from '../_services';
import { CartService } from '../_services/cart.service';
import { KIT, PURCHASEINFO } from '../_models/kit';

@Component({
  selector: 'app-userHome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {
  currentUser: User;
  users: User[];
  wish: KIT[];
  orders: PURCHASEINFO[];
  userid: number;

  constructor(
    private authenticationService: AuthenticationService,
    private userService: UserService,
    private cartService: CartService
  ) {
    this.currentUser = this.authenticationService.currentUserValue;
  }

  ngOnInit(): void {
    this.wish = this.cartService.getWishList();
    if (this.currentUser){
      this.userid = this.currentUser.id
    } else
    {
      this.userid = 0;
    }
    this.getOrders(this.userid.toString());
    console.log(this.orders)
  }

  deleteUser(id: number) {
    this.userService.delete(id)
      .pipe(first())
      .subscribe(() => this.loadAllUsers());
  }

  private loadAllUsers() {
    this.userService.getAll()
      .pipe(first())
      .subscribe(users => this.users = users);
  }

  getOrders(id: string): void {
    this.cartService.getOrders(id)
      .subscribe(orders => {
        return (this.orders = orders);
      });
  }
}

