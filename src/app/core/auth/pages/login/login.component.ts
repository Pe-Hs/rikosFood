import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  controlForm: FormGroup = new FormGroup({});
  

  constructor(private router: Router,
    private authService: AuthService,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {

    this.controlForm = new FormGroup({
      usuario: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    })

  }

  hide = true;

  login() {

    // console.log(this.controlForm.value);
    // console.log(this.controlForm.valid);

    const { usuario, password } = this.controlForm.value;

    if (this.controlForm.valid) {
      this.authService.login(usuario, password)
        .subscribe(ok => {

          const snackBar = new MatSnackBarConfig();
          snackBar.duration = 1 * 1000;

          console.log(ok);

          if (ok === true) {

            this.router.navigateByUrl('/admin/dashboard')

          } else {
            this.snackBar.open(ok, 'cerrar', snackBar)
          }
        })
    }

  }


}
