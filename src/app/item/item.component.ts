import {Component, inject, Input} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {umamiAttr} from "../lib/umami";

@Component({
    selector: 'app-item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.css']
})
export class ItemComponent {

  @Input() name = '';
  @Input() url = '';

  private route = inject(ActivatedRoute);
  path = this.route.snapshot.url[0]?.path;
  protected readonly umamiAttr = umamiAttr;
}
