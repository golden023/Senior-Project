import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { KitsService } from '../_services';
import { KIT } from '../_models/kit';
import { CartService } from '../_services/cart.service';

@Component({
  selector: 'app-kit-page',
  templateUrl: './kit-page.component.html',
  styleUrls: ['./kit-page.component.css'],
  providers: [KitsService]
})
export class KitPageComponent implements OnInit {
  kitid: string;
  lkit: KIT[];

  constructor(
    private route:ActivatedRoute,
    private service:KitsService,
    private cartService: CartService
    ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      console.log(params.get('KitID'));
      this.kitid = params.get('KitID');
    });
    this.loadKit();
  };

  loadKit(): void {
    this.service.getKit(this.kitid)
      .subscribe(lkit => {
        return (this.lkit = lkit);
      });
  };

  addToCart(KIT) {
    this.cartService.addToCart(KIT);
  }

  addToWish(KIT) {
    window.alert('Kit has been added to your wishlist!');
    this.cartService.addToWishList(KIT);
  }

}
