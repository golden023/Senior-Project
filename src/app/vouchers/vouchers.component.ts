import { Component, OnInit } from '@angular/core';
import { KIT } from '../_models/kit';
import { CartService } from '../_services/cart.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-vouchers',
  templateUrl: './vouchers.component.html',
  styleUrls: ['./vouchers.component.css']
})
export class VouchersComponent implements OnInit {
  voucherForm: FormGroup;
  kit: KIT[];
  constructor(
    private formBuilder: FormBuilder,
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.voucherForm = this.formBuilder.group({});
  }
  addToCart(kit) {} 
  onSubmit() {}
}
