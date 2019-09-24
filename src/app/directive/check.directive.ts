import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appCool]'
})
export class CheckDirective {

  constructor(private elem:ElementRef) {
    elem.nativeElement.style.fontWeight = "bolder";
  }

}
