import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';

import { Observable } from 'rxjs';


import { KIT } from '../_models/kit';


@Injectable({
  providedIn: 'root'
})

export class KitsService {
  
  constructor(private http: HttpClient){}

  getAll (): Observable<KIT[]>  {
    return this.http.get<KIT[]>('http://localhost:5000/kits')
      .pipe();
  }

  getEventKits (): Observable<KIT[]>  {
    return this.http.get<KIT[]>('http://localhost:5000/eventkits')
      .pipe();
  }

  getGiftKits (): Observable<KIT[]>  {
    return this.http.get<KIT[]>('http://localhost:5000/giftkits')
      .pipe();
  }

  getSaleKits (): Observable<KIT[]>  {
    return this.http.get<KIT[]>('http://localhost:5000/salekits')
      .pipe();
  }

  getTopKits (): Observable<KIT[]>  {
    return this.http.get<KIT[]>('http://localhost:5000/topkits')
      .pipe();
  }

  getKit (kitID: string): Observable<KIT[]>  {
    const options = kitID ?
      { params: new HttpParams().set('kitID', kitID) } : {};

    return this.http.get<KIT[]>(`http://localhost:5000/singlekit`, options)
      .pipe();
  }
}

