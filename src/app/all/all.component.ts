import { Component, OnInit, SimpleChanges } from '@angular/core';
import { KIT } from '../_models/kit';
import { KitsService } from '../_services';
import { CartService } from '../_services/cart.service'

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss'],
  providers: [KitsService]
})

export class AllComponent implements OnInit {
  kits: KIT[];
  openkit: KIT;

  constructor(
    private service: KitsService,
    private cartService: CartService
    ) {}
  ngOnInit(): void {
    this.getKits();
  }
  getKits(): void {
    this.service.getAll()
      .subscribe(kits => {
        return (this.kits = kits);
      });
  } 
  addToCart(KIT) {
    this.cartService.addToCart(KIT);
  }
  openKit(KIT): void{
    console.log("getCart")
    this.openkit = KIT
  }
  addToWish(KIT) {
    this.cartService.addToCart(KIT);
  }
}