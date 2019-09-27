import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(config: NgbCarouselConfig) {
    config.interval = 3000; //delay
    config.wrap = true; //loop continuously
    config.keyboard = false; //can not be navigated by key board
    config.pauseOnHover = true; // pause on hover
  }
  ngOnInit() {
  }

}
