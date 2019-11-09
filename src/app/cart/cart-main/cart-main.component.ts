import { Component, OnInit, OnChanges, SimpleChanges, EventEmitter } from '@angular/core';
import { CartService } from '../../_services/cart.service'
import { KIT } from '../../_models/kit';
import { ActivatedRoute } from '@angular/router';


import { FormBuilder } from '@angular/forms';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';
import { ConstantPool } from '@angular/compiler';

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
    private formBuilder: FormBuilder,
    private route:ActivatedRoute,
  ) { 
    this.lkit = this.cartService.getItem();

    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });

  }

  ngOnInit() {
    this.lkit = this.cartService.getItem();
    this.route.paramMap.subscribe(params => {
      console.log(params.get('Name'));
      this.name = params.get('Name');
    });
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
      total = total + Number(element.PriceDis);
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

