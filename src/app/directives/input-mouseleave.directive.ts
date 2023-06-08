import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appInputMouseleave]'
})
export class InputMouseleaveDirective implements OnInit {

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    this.el.nativeElement.focus();
  }

  @HostListener('mouseleave') onMouseLeave() {
    return true;
  }

}
