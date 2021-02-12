import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-router',
  templateUrl: './router.component.html',
  styleUrls: ['./router.component.css']
})
export class RouterComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  loadPath(path: string) {
    this.router.navigate([path])
  }
}
