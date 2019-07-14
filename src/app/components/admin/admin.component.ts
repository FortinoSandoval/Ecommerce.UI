import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.less']
})
export class AdminComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}
  sidenavOpen = false;
  ngOnInit() {
    this.authService.isAdmin().subscribe(isAdmin => {
      if (!isAdmin) {
        this.router.navigate(['/']);
      }
    });
  }
  logout() {
    this.authService.logout('/');
  }
}
