import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth/service/auth.service';

import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-cli-layout',
  templateUrl: './cli-layout.component.html',
  styleUrls: ['./cli-layout.component.css']
})
export class CliLayoutComponent implements OnInit {

  hide = false;
  hide2 = true;
  matNoti = 0;
  isShow = true;

  toggleDisplay() {
    this.isShow = !this.isShow;
  }
  
  get user(){
    return this.authService.user;
  }

  constructor(private router: Router,
              private authService: AuthService,
              library: FaIconLibrary) { 
                library.addIconPacks(fas, fab);
              }

  ngOnInit(): void {
  }

  login(){
    this.router.navigateByUrl('/auth')
  }

  register(){
    this.router.navigateByUrl('/auth/register')
  }

}
