import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  form = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.minLength(5), Validators.maxLength(10)]),
  });

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }

  onSubmit(): void {
    if (this.form.valid) {
      const email = sessionStorage.getItem(`${this.form.value.email}`);
      if (email) {
        const person = JSON.parse(email);
        if (person.password === this.form.value.password) {
          window.alert('You are logged in successfully');
        } else {
          window.alert('Wrong password');
        }
      } else {
        window.alert('Wrong e-mail');
      }
    }
  }

}
