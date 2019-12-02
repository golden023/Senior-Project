import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-shippinginfo',
  templateUrl: './shippinginfo.component.html',
  styleUrls: ['./shippinginfo.component.css']
})
export class ShippinginfoComponent implements OnInit {

  constructor(
      private titleService: Title
) { }

  ngOnInit() {
  }

    public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
}
