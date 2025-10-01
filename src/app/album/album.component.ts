import { Component } from '@angular/core';
import linksList from '../../assets/data/link-data/album.json';

@Component({
    selector: 'app-album',
    templateUrl: './album.component.html',
    styleUrls: ['./album.component.css'],
    standalone: false
})
export class AlbumComponent {
  linksList = linksList;
}
