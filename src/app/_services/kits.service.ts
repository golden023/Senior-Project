import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

import { Observable } from 'rxjs';


import { KIT, Kit } from '../_models/kit';


@Injectable({
  providedIn: 'root'
})

export class KitsService {
  kitsURL = 'http://localhost:5000/api/kits';

  constructor(private http: HttpClient){}

  getAll (): Observable<KIT[]>  {
    return this.http.get<KIT[]>(this.kitsURL)
      .pipe();
  }

  newKit(kit: Kit) {
    return this.http.post(`http://localhost:5000/api/newKit`, kit);
  }
}

