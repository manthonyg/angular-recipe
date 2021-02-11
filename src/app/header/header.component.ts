import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NavigationService } from "../services/navigation/navigation.service";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private navigationService: NavigationService) { }


  selectNavItem(navItem: string): void {
    this.navigationService.selectNavItemEvent.emit(navItem)
    console.log(navItem)
  }

}
