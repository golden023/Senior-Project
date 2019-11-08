import { Component, OnInit, Input } from '@angular/core';
import { Kit } from '../../_models/kit';

@Component({
  selector: 'app-cart-item-detail',
  templateUrl: './cart-item-detail.component.html',
  styleUrls: ['./cart-item-detail.component.css']
})
export class CartItemDetailComponent implements OnInit {
  @Input() kit: Kit;
  constructor() { }

  ngOnInit() {
  }

}
