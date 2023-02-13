import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { passwordMatchingValidatior } from 'src/app/helpers/pass-match';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public controlForm: FormGroup | any;

  constructor( private router : Router,
               private authService: AuthService,
               private snackBar: MatSnackBar) { }

  ngOnInit(): void {

    this.controlForm = new FormGroup({
      usuario: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required, Validators.email]),
      password: new FormControl('',[Validators.required, Validators.minLength(6)]),
      passwordConfir: new FormControl('',[Validators.required])
    }, {validators: passwordMatchingValidatior} )

  }

  hide = true;
  hide2 = true;


  register(){
    console.log(this.controlForm.value);
    console.log(this.controlForm.valid);

    const {usuario, email, password} = this.controlForm.value;
    
    if(this.controlForm.valid){
      this.authService.register(usuario, email, password)
        .subscribe( ok => {
          const snackBar = new MatSnackBarConfig();
          snackBar.duration = 1 * 1000;

          if( ok === true){
            this.router.navigateByUrl('/admin/dashboard')
          }else{
            this.snackBar.open(ok, 'cerrar', snackBar)
          }
        })
    }

  }


}
