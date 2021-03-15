import { Directive, HostBinding, HostListener, Input } from '@angular/core';


@Directive({
  selector: '[BorderColor]'
})
export class borderdirective {

  ngOnInit() {
    this.borderColor = this.data.borderColor
  }


  @Input('BorderColor') data: any;
  @HostBinding('style.border') borderColor: string;
  @HostListener('dblclick') DbClicker() {
    this.borderColor = this.data.borderColorClick
  }

  @HostListener('click') Clicker() {
    this.borderColor = this.data.borderColorDbClick
  }
  borderColorML
  @HostListener('mouseenter') mouseON() {
    this.borderColor = this.data.borderColorME
  }

  @HostListener('mouseleave') mouseL() {
    this.borderColor = this.data.borderColorML
  }
}
