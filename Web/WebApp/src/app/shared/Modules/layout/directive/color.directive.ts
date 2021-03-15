import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[Backgroundcolor]'
})

export class Colordirective {
  @Input('Backgroundcolor') data: any = {};
  @HostBinding('style.backgroundColor') background: string = 'red';
  @HostListener('mouseover') click() {
    this.background = this.data.back;
  }

  @HostListener('mouseleave') click1() {
    this.background = this.data.backl;
  }
}
