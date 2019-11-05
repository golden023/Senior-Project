import { Component, OnInit } from '@angular/core';
import { KIT } from '../_models/kit';
import { KitsService } from '../_services';
import { CartService } from '../_services/cart.service';

@Component({
  selector: 'app-gift',
  templateUrl: './gift.component.html',
  styleUrls: ['./gift.component.scss'],
  providers: [KitsService]
})
export class GiftComponent implements OnInit {
  kits: KIT[];

  constructor(
    private service: KitsService,
    private cartService: CartService
    ) { }

    ngOnInit(): void {
      this.getKits();
    }
    getKits(): void {
      this.service.getGiftKits()
        .subscribe(kits => {
          return (this.kits = kits);
        });
    };
    addToCart(KIT) {
      window.alert('Your kit has been added to the cart!');
      this.cartService.addToCart(KIT);
    }
}
