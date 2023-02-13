import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth/service/auth.service';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit {

  hide = false;
  hide2 = true;
  matNoti = 0;
  
  get user(){
    return this.authService.user;
  }

  constructor(private router: Router,
              private authService: AuthService) { }

  ngOnInit(): void {
  }

  logout(){
    
    this.router.navigateByUrl('/auth')
    this.authService.logout();
  }

}
