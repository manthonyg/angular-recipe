import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  selectedNavOption: string = ''

  @Output() navOptionSelected = new EventEmitter<string>();

  handleSelectNavOption(navOption: string) {
    this.navOptionSelected.emit(navOption)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
