import { Component, OnInit } from '@angular/core';

import { User } from '../_models';
import { UserService, AuthenticationService } from '../_services';
import { CartService } from '../_services/cart.service';
import { KIT } from '../_models/kit';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  currentUser: User;
  users: User[];
  wish: KIT[];
  constructor(
    private authenticationService: AuthenticationService,
    private userService: UserService,
    private cartService: CartService
  ) {
    this.currentUser = this.authenticationService.currentUserValue;
  }

  ngOnInit() {
    this.loadAllUsers();
    this.wish = this.cartService.getWishList();
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

}
