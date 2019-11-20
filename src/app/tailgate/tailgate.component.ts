import { Component, OnInit, SimpleChanges } from '@angular/core';
import { KIT } from '../_models/kit';
import { KitsService } from '../_services';
import { CartService } from '../_services/cart.service';

@Component({
  selector: 'app-tailgate',
  templateUrl: './tailgate.component.html',
  styleUrls: ['./tailgate.component.css'],
  providers: [KitsService]
})
export class TailgateComponent implements OnInit {
  ekits: KIT[];
  openKit: KIT;

  constructor(
    private service: KitsService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.getKit();
  }

  getKit(): void {
    this.service.getKit('108').subscribe(ekits => {
      return (this.ekits = ekits);
    });
  };


  addToCart(KIT) {
    window.alert('Your kit has been added to the cart!');
    this.cartService.addToCart(KIT);
  }
}
