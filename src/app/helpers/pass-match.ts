import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const passwordMatchingValidatior: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password');
    const passwordConfir = control.get('passwordConfir');
  
    return password?.value === passwordConfir?.value ? null : { notmatched: true };
  };