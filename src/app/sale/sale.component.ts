import { Component, OnInit, SimpleChanges } from '@angular/core';
import { KIT } from '../_models/kit';
import { KitsService } from '../_services';
import { CartService } from '../_services/cart.service';

@Component({
  selector: 'app-event',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.scss']
})
export class SaleComponent implements OnInit {
  skits: KIT[];
  openkit: KIT;

  constructor(
    private service: KitsService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.getKits();
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
    this.cartService.addToWishList(KIT);
  }
} 
