import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../_models';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private http: HttpClient) { }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(`https://everydaykits.xyz/allusers`);
  }

  register(user: User) {
    return this.http.post(`https://everydaykits.xyz/registerUser`, user);
  }

  delete(id: number) {
    return this.http.delete(`https://everydaykits.xyz/api/${id}`);
  }
}
