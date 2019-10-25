import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { KitsService } from '../_services';
import { KIT } from '../_models/kit';

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
    private service:KitsService
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

}
