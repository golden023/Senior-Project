import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../_models';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private http: HttpClient) { }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(`http://3.135.129.218:5000/allusers`);
  }

  register(user: User) {
    return this.http.post(`http://3.135.129.218:5000/registerUser`, user);
  }

  delete(id: number) {
    return this.http.delete(`http://3.135.129.218:5000/api/${id}`);
  }
}
