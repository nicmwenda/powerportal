import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.scss'],
})
export class PrivateComponent implements OnInit {
  sidebarOpen: Boolean = true;

  constructor() {}

  ngOnInit(): void {}

  sidebarToggle(event) {
    this.sidebarOpen = !this.sidebarOpen;
  }
}
