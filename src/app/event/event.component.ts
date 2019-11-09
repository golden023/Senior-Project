import { Component, OnInit, SimpleChanges } from '@angular/core';
import { KIT } from '../_models/kit';
import { KitsService } from '../_services';
import { CartService } from '../_services/cart.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss'],
  providers: [KitsService]
})
export class EventComponent implements OnInit {
  ekits: KIT[];
  openkit: KIT;

  constructor(
    private service: KitsService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.getKits();
  }
  getKits(): void {
    this.service.getEventKits()
      .subscribe(ekits => {
        return (this.ekits = ekits);
      });
  };
  addToCart(KIT) {
    window.alert('Your kit has been added to the cart!');
    this.cartService.addToCart(KIT);
  }
  openKit(KIT): void {
    console.log("getCart")
    this.openkit = KIT
  }
  addToWish(KIT) {
    this.cartService.addToCart(KIT);
  }
} 