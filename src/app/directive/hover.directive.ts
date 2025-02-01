import {
  Directive,
  Renderer2,
  ElementRef,
  OnInit,
  HostListener,
  HostBinding,
} from '@angular/core';

@Directive({
  selector: '[Hover]',
  standalone: true,
})
export class HoverEffect implements OnInit {
  constructor(private render2: Renderer2, private elRef: ElementRef) {}
  @HostBinding("style.backgroundColor") color: string = "";
  ngOnInit(): void {}

  @HostListener('mouseenter') onEnter() {
    // this.render2.setStyle(this.elRef.nativeElement, "backgroundColor", "gray")
    this.color = "gray";
  }

  @HostListener('mouseleave') onLeave(){
    // this.render2.removeStyle(this.elRef.nativeElement, "backgroundColor")
    this.color = "";
  }
}
