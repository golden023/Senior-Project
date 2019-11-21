import { Component, OnInit } from '@angular/core';
import { KIT } from '../_models/kit';
import { CartService } from '../_services/cart.service';

@Component({
  selector: 'app-vouchers',
  templateUrl: './vouchers.component.html',
  styleUrls: ['./vouchers.component.css']
})
export class VouchersComponent implements OnInit {
  kit: KIT[];
  constructor(
    private cartService: CartService
  ) { }

  ngOnInit() {
  }
  /* addToCart() {
    this.cartService.addToCart();
  } */
}
