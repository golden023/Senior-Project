import { Component, OnInit, SimpleChanges } from '@angular/core';
import { KIT } from '../_models/kit';
import { KitsService } from '../_services';
import { CartService } from '../_services/cart.service';

@Component({
  selector: 'app-birthday',
  templateUrl: './birthday.component.html',
  styleUrls: ['./birthday.component.css'],
  providers: [KitsService]
})
export class BirthdayComponent implements OnInit {
  ekits: KIT[];


  constructor(
    private service: KitsService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.getKit();
  }

  getKit(): void {
    this.service.getKit('105').subscribe(ekits => {
      return (this.ekits = ekits);
    });
  };


  addToCart(KIT) {
    this.cartService.addToCart(KIT);
  }
}
