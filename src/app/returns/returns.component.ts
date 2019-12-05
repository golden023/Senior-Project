import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, Form } from '@angular/forms';


@Component({
  selector: 'app-returns',
  templateUrl: './returns.component.html',
  styleUrls: ['./returns.component.css']
})
export class ReturnsComponent implements OnInit {
  checkoutForm: FormGroup;
  retrieveOrderForm: FormGroup;
  loginForm: FormGroup;
  returnReasonForm: FormGroup;
  loading = false;
  submitted = false;


  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.checkoutForm = this.formBuilder.group({});
    this.retrieveOrderForm = this.formBuilder.group({});
    this.loginForm = this.formBuilder.group({});
    this.returnReasonForm = this.formBuilder.group({});
  }

  onSubmit(){}

}
