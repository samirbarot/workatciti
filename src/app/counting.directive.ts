import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appcounting]'
})
export class CountingDirective {

  numberOfClicks: number = 0;

  constructor() { }

  @HostListener('click', ['$event.target']) onClick(btn) {
    console.log('button', btn, 'number of clicks:', this.numberOfClicks++);
  }
}
