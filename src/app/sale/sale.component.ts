import { Component, OnInit, SimpleChanges } from '@angular/core';
import { KIT } from '../_models/kit';
import { KitsService, AuthenticationService } from '../_services';
import { CartService } from '../_services/cart.service';

@Component({
  selector: 'app-event',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.scss']
})
export class SaleComponent implements OnInit {
  skits: KIT[];
  openkit: KIT;
  currentServer;

  constructor(
    private service: KitsService,
    private cartService: CartService,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit(): void {
    this.getKits();
    this.authenticationService.getServer().subscribe(server => this.currentServer = server);
  }
  getKits(): void {
    this.service.getSaleKits()
      .subscribe(skits => {
        return (this.skits = skits);
      });
  };
  addToCart(KIT) {
    this.cartService.addToCart(KIT);
  }
  openKit(KIT): void {
    console.log("getCart")
    this.openkit = KIT
  }
  addToWish(KIT) {
    this.cartService.addToCart(KIT);
  }
  wishKit(KIT) {
    window.alert('Kit has been added to your wishlist');
    this.cartService.addToWishList(KIT);
  }
} 
