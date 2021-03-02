import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[Backgroundcolor]'
})

export class Colordirective {
  @Input('Backgroundcolor') data: string;
  @HostBinding('style.backgroundColor') background: string;
  @HostListener('click') click() {
    this.background = this.data;
  }
}
