import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  private _isLoggedIn: boolean = false;

  setLoggedIn(value: boolean): void {
    this._isLoggedIn = value;
  }

  get isLoggedIn(): boolean {
    return this._isLoggedIn;
  }
}
