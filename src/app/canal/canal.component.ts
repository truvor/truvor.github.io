import { Component } from '@angular/core';
import linksList from '../../assets/data/link-data/canal.json';
import { CardComponent } from '../card/card.component';

@Component({
    selector: 'app-canal',
    templateUrl: './canal.component.html',
    styleUrls: ['./canal.component.css'],
    imports: [CardComponent]
})
export class CanalComponent {
  linksList = linksList;
}
