import { Injectable, EventEmitter } from "@angular/core";

@Injectable({providedIn: 'root'})
export class NavigationService {

  private _currentlySelectedNavItem: string = '';
  public selectNavItemEvent = new EventEmitter<string>();

  public getCurrentlySelectedNavItem(): string {
    return this._currentlySelectedNavItem.slice()
  }

  public setCurrentlySelectedNavItem(navItem: string) {
    return this._currentlySelectedNavItem = navItem
  }

}