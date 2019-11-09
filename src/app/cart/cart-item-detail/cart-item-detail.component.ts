import { Component, OnChanges, Input, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { KIT } from '../../_models/kit';

@Component({
  selector: 'app-cart-item-detail',
  templateUrl: './cart-item-detail.component.html',
  styleUrls: ['./cart-item-detail.component.css']
})
export class CartItemDetailComponent implements OnChanges {
  @Input() kit: KIT;
  @Output() editedEmitter = new EventEmitter();
  itemCount: number;
  changeLog;
  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    console.log("changes");
  }
  

  addOne(){
    this.kit.DefaultQnt = this.kit.DefaultQnt + 1;
    this.editedEmitter.emit();
  }
  subOne(){
    this.kit.DefaultQnt = this.kit.DefaultQnt - 1;
    this.editedEmitter.emit();
  }
}
