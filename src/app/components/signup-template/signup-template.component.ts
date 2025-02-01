import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup-template',
  standalone: true,
  imports: [FormsModule, JsonPipe, CommonModule],
  templateUrl: './signup-template.component.html',
  styleUrl: './signup-template.component.css',
})
export class SignupTemplateComponent {
  constructor() {}

  onSignUp(e: any) {
    console.log(e);
  }
}
