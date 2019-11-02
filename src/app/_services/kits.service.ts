import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

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

  getEventKits (): Observable<KIT[]>  {
    return this.http.get<KIT[]>('http://localhost:5000/api/ekits')
      .pipe();
  }

  getGiftKits (): Observable<KIT[]>  {
    return this.http.get<KIT[]>('http://localhost:5000/api/ekits')
      .pipe();
  }

  getSaleKits (): Observable<KIT[]>  {
    return this.http.get<KIT[]>('http://localhost:5000/api/skits')
      .pipe();
  }

  getTopKits (): Observable<KIT[]>  {
    return this.http.get<KIT[]>('http://localhost:5000/api/tkits')
      .pipe();
  }

  getKit (kitID: string): Observable<KIT[]>  {
    const options = kitID ?
      { params: new HttpParams().set('kitID', kitID) } : {};

    return this.http.get<KIT[]>(`http://localhost:5000/api/lkit`, options)
      .pipe();
  }

  newKit(kit: Kit) {
    return this.http.post(`http://localhost:5000/api/newKit`, kit);
  }
}

