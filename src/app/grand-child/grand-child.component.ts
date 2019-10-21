import { Component, OnInit, HostBinding } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-grand-child',
  templateUrl: './grand-child.component.html',
  styleUrls: ['./grand-child.component.scss']
})
export class GrandChildComponent extends ChildComponent implements OnInit {
  @HostBinding('attr.example')
  public example = 'test';

  clicked(event: any) {
    console.log('Grand Child');
  }

  ngOnInit() {
  }

}
