import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/core/auth/service/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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
