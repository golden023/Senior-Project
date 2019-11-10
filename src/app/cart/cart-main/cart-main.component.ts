import { Component, OnInit, OnChanges, SimpleChanges, EventEmitter } from '@angular/core';
import { CartService } from '../../_services/cart.service'
import { KIT } from '../../_models/kit';

@Component({
  selector: 'app-cart-main',
  templateUrl: './cart-main.component.html',
  styleUrls: ['./cart-main.component.css']

})
export class CartMainComponent implements OnInit, OnChanges {
  lkit: KIT[];
  checkoutForm;
  name: string;
  total=0;
  totalQnt=0;

  constructor(
    private cartService: CartService,
  ) { 
    this.lkit = this.cartService.getItem();
  }

  ngOnInit() {
    this.lkit = this.cartService.getItem();
    this.total = this.getTotal(this.lkit);
    this.totalQnt = this.getTotalQnt(this.lkit);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("changes");
  }

  onSubmit(customerData) {
    // Process checkout data here
    console.warn('Your order has been submitted', customerData);

    this.lkit = this.cartService.clearCart();
    this.checkoutForm.reset();
  }

  getTotal(lkit){
    var total = 0;
    lkit.forEach(function(element: KIT){
      total = total + (Number(element.PriceDis)*element.DefaultQnt);
    });
    return total;
  }
  getTotalQnt(lkit){
    var totalQnt = 0;
    lkit.forEach(function(element: KIT){
      totalQnt = totalQnt + element.DefaultQnt;
    });
    return totalQnt;
  }
}

