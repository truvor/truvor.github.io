import { Component } from '@angular/core';
import linksList from '../../assets/data/link-data/trinity.json';

@Component({
    selector: 'app-trinity',
    templateUrl: './trinity.component.html',
    styleUrls: ['./trinity.component.css'],
    standalone: false
})
export class TrinityComponent {
  linksList = linksList;
}
