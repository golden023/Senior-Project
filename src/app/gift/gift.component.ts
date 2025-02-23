import { Component, OnInit, SimpleChanges } from '@angular/core';
import { KIT } from '../_models/kit';
import { KitsService, AuthenticationService } from '../_services';
import { CartService } from '../_services/cart.service';

@Component({
  selector: 'app-gift',
  templateUrl: './gift.component.html',
  styleUrls: ['./gift.component.scss'],
  providers: [KitsService]
})
export class GiftComponent implements OnInit {
  gkits: KIT[];
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
    this.service.getGiftKits()
      .subscribe(gkits => {
        return (this.gkits = gkits);
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
