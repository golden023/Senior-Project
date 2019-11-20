import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Title } from '@angular/platform-browser';

import { KIT } from '../_models/kit';
import { KitsService } from '../_services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [KitsService]
})
export class HomeComponent implements OnInit {
  tkits: KIT[];

  constructor(
    config: NgbCarouselConfig,
    private service: KitsService,
    private titleService: Title
  ) {
    config.interval = 3000; //delay
    config.wrap = true; //loop continuously
    config.keyboard = false; //can not be navigated by key board
    config.pauseOnHover = true; // pause on hover
  }

  ngOnInit(): void {
    this.getTopKits();
  }
  getTopKits(): void {
    this.service.getTopKits()
      .subscribe(tkits => {
        return (this.tkits = tkits);
      });
  };
  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

}
