import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup-reactive',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './signup-reactive.component.html',
  styleUrls: ['./signup-reactive.component.css']
})
export class SignupReactiveComponent {
  signupForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required]],
    password: ['', [Validators.required]],
    confirmPassword: ['', [Validators.required]]
  });

  constructor(private fb: FormBuilder) {}

  // Updated to check the specific form control for the given error key
  hasError(controlName: string, error: string): boolean {
    const control = this.signupForm.get(controlName);
    return control?.touched && control.hasError(error) ? true : false;
  }

  signupFormHandler() {
    console.log('Form values:', this.signupForm.value);
    this.signupForm.patchValue({ email: '' });
  }
}
