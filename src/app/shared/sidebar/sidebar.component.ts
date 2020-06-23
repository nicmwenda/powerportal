import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  @Input() sidebar: any;
  constructor() {}

  ngOnInit(): void {}

  onItemSelected() {
    let innerWidth = window.innerWidth;

    console.log(innerWidth);
    if (innerWidth <= 600) {
      this.sidebar.close();
    }
  }
}
