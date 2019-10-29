import { Component, OnInit, ChangeDetectorRef, ViewChild, ElementRef } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';

declare var Stripe: any;

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {



  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit() {
     // Your Stripe public key
     const stripe = Stripe('pk_test_1s1t0wCirD4fZAGooMDBdO1700TFuEkDHY');

     // Create `card` element that will watch for updates
     // and display error messages
     const elements = stripe.elements();
     const card = elements.create('card');
     card.mount('#card-element');
     card.addEventListener('change', event => {
       const displayError = document.getElementById('card-errors');
       if (event.error) {
         displayError.textContent = event.error.message;
       } else {
         displayError.textContent = '';
       }
     });
 
     // Listen for form submission, process the form with Stripe,
     // and get the 
     const paymentForm = document.getElementById('payment-form');
     paymentForm.addEventListener('submit', event => {
       event.preventDefault();
       stripe.createToken(card).then(result => {
         if (result.error) {
           console.log('Error creating payment method.');
           const errorElement = document.getElementById('card-errors');
           errorElement.textContent = result.error.message;
         } else {
           // At this point, you should send the token ID
           // to your server so it can attach
           // the payment source to a customer
           console.log('Token acquired!');
           console.log(result.token);
           console.log(result.token.id);
         }
       });
     });
  }

  
  }

