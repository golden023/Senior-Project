import { Component, OnInit } from '@angular/core';
import { CartService } from '../_services/cart.service'
import { KIT } from '../_models/kit';
import { ActivatedRoute } from '@angular/router';

import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  lkit: KIT[];
  checkoutForm;
  name: string;
  
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
  }

  onSubmit(customerData) {
    // Process checkout data here
    console.warn('Your order has been submitted', customerData);

    this.lkit = this.cartService.clearCart();
    this.checkoutForm.reset();
  }

}
