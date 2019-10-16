import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { AlertService, UserService, AuthenticationService } from '../_services';

import { Kit } from '../_models/kit'
import { KitsService } from '../_services'


import { first } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})

export class AddProductComponent {
  kitForm: FormGroup;
  submitted = false;
  loading = false;

  constructor(
    private kitService: KitsService,
    private formBuilder: FormBuilder,
    private router: Router,
    private alertService: AlertService
  ) {}

  ngOnInit() {
    this.kitForm = this.formBuilder.group({
      KitName: [''],
      Price: [''],
      Image: [''],
      Discount: ['']
    });
  }

  onSubmit() { 
    this.submitted = true;

    this.loading = true;
    this.kitService.newKit(this.kitForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.alertService.success('New Kit successful', true);
          this.router.navigate(['/addProduct']);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });
      }
    }
