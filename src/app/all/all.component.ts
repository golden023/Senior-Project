import { Component, OnInit, SimpleChanges } from '@angular/core';
import { KIT } from '../_models/kit';
import { KitsService, AuthenticationService } from '../_services';
import { CartService } from '../_services/cart.service';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss'],
  providers: [KitsService]
})

export class AllComponent implements OnInit {
  kits: KIT[];
  openkit: KIT;
  currentServer;

  constructor(
    private service: KitsService,
    private cartService: CartService,
    private authenticationService: AuthenticationService,
    private titleService: Title
  ) { }
  ngOnInit(): void {
    this.getKits();
    this.authenticationService.getServer().subscribe(server => this.currentServer = server);
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
  openKit(KIT): void {
    console.log("getCart")
    this.openkit = KIT
  }
  addToWish(KIT) {
    this.cartService.addToCart(KIT);
  }
  wishKit(KIT) {
    window.alert('Kit has been added to your wishlist');
    this.cartService.addToWishList(KIT);
  }
  
  getserver() {
    return this.authenticationService.getServer();
  }
  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
}