import { Directive, Renderer2, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: "[Highlight]",
  standalone: true
})
export class HighLightDirective implements OnInit{

  constructor(private render: Renderer2, private elRef: ElementRef){}

  ngOnInit(): void {
    this.render.setStyle(this.elRef.nativeElement, 'backgroundColor', "yellow");
  }
}