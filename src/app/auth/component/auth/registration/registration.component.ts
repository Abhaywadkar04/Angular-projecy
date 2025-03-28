import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { passwordMatchValidator } from '../../../utlis/passwordValidators';
import { AuthService } from '../../../services/auth.service';


@Component({
  selector: 'app-registration',
  standalone: false,
  
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {

  registerForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private authService: AuthService) {
    this.registerForm = this.formBuilder.group({
      name: ['',[Validators.required, Validators.minLength(3)]],
      email: ['',[Validators.required, Validators.email]],  
      password: ['',[Validators.required, Validators.minLength(6)]],
      confirmPassword: ['',[Validators.required, Validators.minLength(6)]],
    },
  {
    Validators: passwordMatchValidator

  }
);
   }
   registerSubmit() {
        if (this.registerForm.valid) {
         //it will return true when all the validations are verified including angular (length, reuqired, email) and custom (pasword matching)
          console.log('Success' + this.registerForm.value);
          //this will not be able to print the object, so write the following code
          console.log('Success' + JSON.stringify(this.registerForm.value));
    this.authService.registerUser(this.registerForm.value).subscribe((response)=>console.log(response));
        } else {
          console.log(this.registerForm.errors);
          this.printErrors();
          //this.printErrors();
        }

  }
  printErrors() {
    const controls = this.registerForm.controls;
    // am I accessing / trying to get controlelrs array
    for (const controllerName in controls) {
    const control = controls[controllerName];
    if (control.invalid && control.touched) {
    const errors = control.errors;
    if (errors) {
    console.log(`${controllerName} has the following errors:`);
    for (const error in errors) {
    console.log(`
    - ${error}: ${JSON.stringify(errors[error])}`);
    }
    }
    }
    }
    }


   }




