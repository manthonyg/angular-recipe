import { Injectable, EventEmitter } from "@angular/core";
import { Subject } from "rxjs";
@Injectable({providedIn: 'root'})
export class NavigationService {

  public selectNavItemEvent = new Subject<string>();
  public toggleDropdownMenu = new Subject<string>();

  
  // public getCurrentlySelectedNavItem(): string {
  //   return this._currentlySelectedNavItem.slice()
  // }

  // public setCurrentlySelectedNavItem(navItem: string) {
  //   return this._currentlySelectedNavItem = navItem
  // }

}