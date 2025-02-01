import { Component } from '@angular/core';
import { ParentComponent } from './components/parent/parent.component';
import { HighLightDirective } from './directive/highlight.directive';
import { HoverEffect } from './directive/hover.directive';
import { StructureDirective } from './directive/structure.directive';
import { Capitalize } from './pipes/uppercase.pipe';
import { SignupTemplateComponent } from './components/signup-template/signup-template.component';
import { SignupReactiveComponent } from './components/signup-reactive/signup-reactive.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ParentComponent,
    HighLightDirective,
    HoverEffect,
    StructureDirective,
    Capitalize,
    SignupTemplateComponent,
    SignupReactiveComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'practice';
  name: string = 'niraj';
}
