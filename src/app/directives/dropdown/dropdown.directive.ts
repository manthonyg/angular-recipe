import {Directive, ElementRef, HostBinding, HostListener} from '@angular/core';
 
@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  @HostBinding('class.show') isOpen = false;
  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    const dropdownEl = this.elRef.nativeElement.children[1]
    this.isOpen = this.elRef.nativeElement.contains(event.target)
    ? dropdownEl?.classList.toggle('show') 
    : dropdownEl?.classList.remove('show');
    // this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  }
  constructor(private elRef: ElementRef) {}
}