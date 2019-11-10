import { Component, OnInit} from '@angular/core';
import { CartService } from '../../_services/cart.service'
import { KIT, TOTALS } from '../../_models/kit';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-checkout-main',
  templateUrl: './checkout-main.component.html',
  styleUrls: ['./checkout-main.component.css']
})
export class CheckoutMainComponent implements OnInit {
  lkit: KIT[];
  totals = {
    subtotal: 0,
    totalQnt: 0,
    shipping: 0,
    taxes: 0,
    total: 0
  };
  checkoutForm;
  name: string;
  

  constructor(
    private cartService: CartService,
    private route:ActivatedRoute,
  ) { 
    this.lkit = this.cartService.getItem();
  }

  ngOnInit() {
    this.lkit = this.cartService.getItem();
    this.route.paramMap.subscribe(params => {
      console.log(params.get('Name'));
      this.name = params.get('Name');
    });
    this.totals = this.getTotals(this.lkit);
  }

  getTotals(lkit){
    var totals: TOTALS;
    var subtotal = 0;
    var taxes = 0;
    var shipping = 0;
    var totalQnt = 0;
    var total = 0;
    
    lkit.forEach(function(element: KIT){
      shipping = shipping + element.ShippingCost;
      totalQnt = totalQnt + element.DefaultQnt;
      taxes = taxes + (element.PriceDis*0.07);
      subtotal = subtotal + (element.PriceDis*element.DefaultQnt);
    });
    total = shipping + taxes + subtotal;
    totals = {
      subtotal: subtotal,
      totalQnt: totalQnt,
      shipping: shipping,
      taxes: taxes,
      total: total
    };
    return totals;
  }
}
