import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  constructor(private activeRoute: ActivatedRoute){
    this.activeRoute.params.subscribe((data:any)=>{
      console.log(data['name']);
    })
  }

}
