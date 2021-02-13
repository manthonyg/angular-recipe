import { EventEmitter } from "@angular/core";

export class AuthService {
  private _loggedIn: boolean = false;
  public logStatusChange = new EventEmitter<boolean>();

  private _setUserLogStatus(logStatus) {
    return this._loggedIn = logStatus
  }

  public getUserLogStatus() {
    return this._loggedIn
  }

  isAuthenticated(): Promise<boolean> {
    const promise: Promise<boolean> = new Promise((resolve, _) => {
      setTimeout(() => {
        resolve(this._loggedIn)
      }, 1000);
     });
     return promise
    };

  login() {
    this._setUserLogStatus(true)
    console.log('User logged in')
  }

  logout() {
    this._setUserLogStatus(false)
    console.log('User logged out')
  }

}