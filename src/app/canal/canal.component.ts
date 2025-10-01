import { Component } from '@angular/core';
import linksList from '../../assets/data/link-data/canal.json';

@Component({
    selector: 'app-canal',
    templateUrl: './canal.component.html',
    styleUrls: ['./canal.component.css'],
    standalone: false
})
export class CanalComponent {
  linksList = linksList;
}
