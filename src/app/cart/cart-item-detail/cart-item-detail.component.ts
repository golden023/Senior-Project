import { Component, OnInit, Input } from '@angular/core';
import { Kit } from '../../_models/kit';

@Component({
  selector: 'app-cart-item-detail',
  templateUrl: './cart-item-detail.component.html',
  styleUrls: ['./cart-item-detail.component.css']
})
export class CartItemDetailComponent implements OnInit {
  @Input() kit: Kit;
  itemCount: number;

  constructor() { }

  ngOnInit() {
    this.itemCount=1;
  }

  addOne(){
    this.itemCount = this.itemCount + 1;
  }
  subOne(){
    this.itemCount = this.itemCount - 1;
  }
}
