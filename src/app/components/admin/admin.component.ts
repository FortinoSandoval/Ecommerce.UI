import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.less']
})
export class AdminComponent implements OnInit {
  constructor(private authService: AuthService) {}
  sidenavOpen = false;
  ngOnInit() {}
  logout() {
    this.authService.logout('/');
  }
}
