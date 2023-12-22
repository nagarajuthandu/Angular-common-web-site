// user.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

const apiUrl = 'http://localhost:3000/users';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(apiUrl);
  }

  getUserById(userId: number): Observable<User> {
    const url = `${apiUrl}/${userId}`;
    return this.http.get<User>(url);
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(apiUrl, user);
  }

  updateUser(user: User): Observable<User> {
    const url = `${apiUrl}/${user.id}`;
    return this.http.put<User>(url, user);
  }

  deleteUser(userId: number): Observable<void> {
    const url = `${apiUrl}/${userId}`;
    return this.http.delete<void>(url);
  }
}
