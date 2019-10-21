import { Component, OnInit, HostBinding } from '@angular/core';
import { BaseDirective } from '../base/base.component';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent extends BaseDirective implements OnInit {

  @HostBinding('attr.selected')
  public selected = false;

  clicked(event: any) {
    console.log('Child');
  }

  ngOnInit() {
  }

}
