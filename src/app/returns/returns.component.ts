import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-returns',
  templateUrl: './returns.component.html',
  styleUrls: ['./returns.component.css']
})
export class ReturnsComponent implements OnInit {
  checkoutForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,

  ) { }

  ngOnInit() {
    this.checkoutForm = this.formBuilder.group({});
  }

  onSubmit(){}

}
