import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() toggleTheSidebar: EventEmitter<any> = new EventEmitter();

  constructor(public authService: AuthService, public router: Router) {}

  ngOnInit(): void {}
  toggleSidebar() {
    this.toggleTheSidebar.emit();
  }

  logOut() {
    this.authService.signOut().then(() => {
      this.router.navigate(['/auth/login']);
    });
  }
}
