import { Directive, OnInit, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBase]'
})
export class BaseDirective implements OnInit {
  ngOnInit() {
  }

  @HostListener('click', ['$event'])
  clicked(event: any) {
    console.log('Base');
  }

}
