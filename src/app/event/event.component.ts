import { Component, OnInit } from '@angular/core';
import { KIT } from '../_models/kit';
import { KitsService } from '../_services';


@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss'],
  providers: [KitsService]
})
export class EventComponent implements OnInit {
  ekits: KIT[];

  constructor(private service: KitsService) { }

  ngOnInit(): void {
    this.getKits();
  }
  getKits(): void {
    this.service.getEventKits()
      .subscribe(ekits => {
        return (this.ekits = ekits);
      });
  };
} 