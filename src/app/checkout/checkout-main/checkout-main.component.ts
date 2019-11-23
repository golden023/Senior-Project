import { Component, OnInit} from '@angular/core';
import { CartService } from '../../_services/cart.service'
import { KIT, TOTALS } from '../../_models/kit';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertService } from '../../_services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout-main',
  templateUrl: './checkout-main.component.html',
  styleUrls: ['./checkout-main.component.css']
})
export class CheckoutMainComponent implements OnInit {
  customerForm: FormGroup;
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
  submitted = false;
  loading = false;
  poNum;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private cartService: CartService,
    private route:ActivatedRoute,
    private alertService: AlertService
  ) { 
    this.lkit = this.cartService.getItem();
    this.poNum = this.cartService.getPO();
  }

  ngOnInit() {
    this.lkit = this.cartService.getItem();
    this.totals = this.getTotals(this.lkit);
    this.getPO();

    this.customerForm = this.formBuilder.group({
      email: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      shippingAdd: ['', Validators.required]
    });
    console.log(this.lkit);
  }

  f(){
    return this.customerForm.controls;
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

  onSubmit() {
    this.submitted = true;
    console.log("PO NUmber")
    console.log(this.poNum);
    // stop here if form is invalid
    if (this.customerForm.invalid) {
      return;
    }
    
    this.loading = true;
    this.cartService.purchase(this.customerForm.value, this.lkit, this.poNum)
      .pipe()
      .subscribe(
        data => {
          this.alertService.success('Purchase successful', true);
          this.router.navigate(['/']);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });
  }

  getPO(){
    this.cartService.getPO().subscribe(ponum => {
      return (this.poNum = ponum);
    })
  }
}
