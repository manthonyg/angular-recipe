import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NavigationService } from "../services/navigation/navigation.service";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public selectedNavMenu: string = '';

  constructor(private navigationService: NavigationService) { }

  ngOnInit(): void {
    this.navigationService.toggleDropdownMenu
    .subscribe((navMenu) => {
      return this.selectedNavMenu = navMenu
    })
  }
  
  selectNavItem(navItem: string): void {
    this.navigationService.selectNavItemEvent.emit(navItem)
    console.log(navItem)
  }

  handleToggleDropdown(navItem: string): void {
    this.navigationService.toggleDropdownMenu.emit(navItem)
    console.log(navItem)
  }

}
