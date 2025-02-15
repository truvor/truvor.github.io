import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.css'],
    standalone: false
})
export class ItemComponent {

  @Input() name = '';
  @Input() url = '';

}
