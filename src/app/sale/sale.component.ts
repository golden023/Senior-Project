import { Component, OnInit } from '@angular/core';
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

  constructor(private service: KitsService,
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
    window.alert('Your kit has been added to the cart!');
    this.cartService.addToCart(KIT);
  }
} 
