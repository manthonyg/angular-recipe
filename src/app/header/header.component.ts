import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NavigationService } from "../services/navigation/navigation.service";
import { RouterComponent } from "../router/router/router.component";
import { Router } from "@angular/router";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public selectedNavMenu: string = '';

  constructor(private navigationService: NavigationService, private router: Router) { }

  ngOnInit(): void {
    this.navigationService.toggleDropdownMenu
    .subscribe((navMenu) => {
      return this.selectedNavMenu = navMenu
    })
    // this.router.navigate(['recipe-list', '2'])
    

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
