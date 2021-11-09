import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  form = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.email, Validators.required]),
    phoneNumber: new FormControl(''),
    password: new FormControl('', [Validators.minLength(5), Validators.maxLength(10)]),
  });

  onSubmit(): void {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      sessionStorage.setItem(`${this.form.value.email}`, JSON.stringify(this.form.value));
      window.alert('You are registered successfully');
    }
  }

  get firstName() {
    return this.form.get('firstName');
  }

  get lastName() {
    return this.form.get('lastName');
  }

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }

}
