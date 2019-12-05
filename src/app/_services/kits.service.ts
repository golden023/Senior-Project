import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { KIT, Kit } from '../_models/kit';

@Injectable({
  providedIn: 'root'
})

export class KitsService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<KIT[]> {
    return this.http.get<KIT[]>('https://everydaykits.xyz/kits')
      .pipe();
  }

  getEventKits(): Observable<KIT[]> {
    return this.http.get<KIT[]>('https://everydaykits.xyz/eventkits')
      .pipe();
  }

  getGiftKits(): Observable<KIT[]> {
    return this.http.get<KIT[]>('https://everydaykits.xyz/giftkits')
      .pipe();
  }

  getSaleKits(): Observable<KIT[]> {
    return this.http.get<KIT[]>('https://everydaykits.xyz/salekits')
      .pipe();
  }

  getTopKits(): Observable<KIT[]> {
    return this.http.get<KIT[]>('https://everydaykits.xyz/topkits')
      .pipe();
  }

  getKit(kitID: string): Observable<KIT[]> {
    const options = kitID ?
      { params: new HttpParams().set('kitID', kitID) } : {};

    return this.http.get<KIT[]>(`https://everydaykits.xyz/singlekit`, options)
      .pipe();
  }
}

