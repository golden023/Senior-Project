import { Component, OnInit } from '@angular/core';
import { KIT } from '../_models/kit';

@Component({
  selector: 'app-vouchers',
  templateUrl: './vouchers.component.html',
  styleUrls: ['./vouchers.component.css']
})
export class VouchersComponent implements OnInit {
  kit: KIT[];
  constructor() { }

  ngOnInit() {
  }

  addToCart(KIT) {
    window.alert('Your kit has been added to the cart!');
  }

}
