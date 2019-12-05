import { Component, OnChanges, Input, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { KIT } from '../../_models/kit';
import { CartService } from '../../_services/cart.service'

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
  constructor(
    private cartService: CartService,
  ) { }

  ngOnChanges(changes: SimpleChanges) {
    console.log("changes");
  }
  

  addOne(){
    this.kit.DefaultQnt = this.kit.DefaultQnt + 1;
    this.editedEmitter.emit();
  }
  subOne(){
    if (this.kit.DefaultQnt <= 1){
      this.kit.DefaultQnt = 1;
      this.editedEmitter.emit();
    }else{
      this.kit.DefaultQnt = this.kit.DefaultQnt - 1;
      this.editedEmitter.emit();
    } 
  }
  RemoveItem(){
    this.cartService.removeFromCart(this.kit);
    this.editedEmitter.emit();
  }
}
