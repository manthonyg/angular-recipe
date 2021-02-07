import { Component, Input, OnInit, OnChanges, DoCheck, SimpleChanges, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input() recipe: {name: string, description: string, imagePath: string, directions: string, time: string}


  constructor() { 
    console.log('constructor method fired')
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges fired')
    console.log({changes})
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy fired')
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked fired')
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit fired')
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked fired')
  }

  ngDoCheck(): void {
    console.log('ngDoCheck fired')
  }

  ngOnInit(): void {
    console.log('ngOnInit fired')
  }

}
