import { Component } from '@angular/core';

@Component({
    selector: 'app-album',
    templateUrl: './album.component.html',
    styleUrls: ['./album.component.css'],
    standalone: false
})
export class AlbumComponent {
  linksList = [
    {name: 'Party Sign-up', url: 'https://www.bandsintown.com/e/106655421-risky4real-at-peace-cafe'},
    {name: 'Spoti Pre-save', url: 'https://open.spotify.com/track/6IJjkXQHCdc1ghkWeoIT3I'},
    {name: 'Apple', url: 'https://music.apple.com/us/album/wooden-city/1802287086'},
  ];
}
