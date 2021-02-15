import { Component, OnInit, OnDestroy, EventEmitter, Output } from '@angular/core';
import { NavigationService } from "../services/navigation/navigation.service";
import { RouterComponent } from "../router/router/router.component";
import { Router } from "@angular/router";
import { AuthService } from "../auth.service";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  public selectedNavMenu: string = '';
  public loggedIn: boolean = false;
  
  constructor(private navigationService: NavigationService, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.navigationService.toggleDropdownMenu
    .subscribe((navMenu) => {
      return this.selectedNavMenu = navMenu
    })
    // this.router.navigate(['recipe-list', '2'])
    this.loggedIn = this.authService.getUserLogStatus()
    // now subscribe to the observable event in case it is changed from within the component
    this.authService.logStatusChange.subscribe((logStatus: boolean) => {
      console.log('somethin changed')
      this.loggedIn = logStatus
    })
  }

  ngOnDestroy(): void {
    this.authService.logStatusChange.unsubscribe()
  }

  login(): void {
    this.authService.login()
  }

  logout(): void {
    this.authService.logout()
  }

  selectNavItem(navItem: string): void {
    this.navigationService.selectNavItemEvent.next(navItem)
    console.log(navItem)
  }

  handleToggleDropdown(navItem: string): void {
    this.navigationService.toggleDropdownMenu.next(navItem)
    console.log(navItem)
  }

}
