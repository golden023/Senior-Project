import { Component, OnInit } from '@angular/core';
import { CartService } from '../_services/cart.service'
import { KIT } from '../_models/kit';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  lkit: KIT[];


  constructor(
    private cartService: CartService

  ) { }

  ngOnInit() {
    this.lkit = this.cartService.getItem();
  }

}
