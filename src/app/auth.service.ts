import { EventEmitter } from "@angular/core";

export class AuthService {
  private _loggedIn: boolean = false;
  public logStatusChange = new EventEmitter<boolean>();

  private _setUserLogStatus(logStatus) {
    this._loggedIn = logStatus
    this.logStatusChange.emit(logStatus)
    
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
    const promise: any = new Promise((resolve, _) => {
      setTimeout(() => {
        resolve(this._setUserLogStatus(true))
      }, 1000);
  return promise
  })
};

  logout() {
    const promise: any = new Promise((resolve, _) => {
      setTimeout(() => {
        resolve(this._setUserLogStatus(false));
      }, 1000);
  });
  return promise
  }

}