import { Component } from '@angular/core';

@Component({
    selector: 'app-feast',
    templateUrl: './feast.component.html',
    styleUrls: ['./feast.component.css'],
    standalone: false
})
export class FeastComponent {
  linksList = [
    {name: 'Spotify', url: 'https://open.spotify.com/track/6IJjkXQHCdc1ghkWeoIT3I'},
    {name: 'Apple', url: 'https://music.apple.com/ae/album/feast/1782193085'},
    {name: 'Deezer', url: 'https://deezer.page.link/7EnTJgT55wjQmM9t5'},
    {name: 'YT.Music', url: 'https://music.youtube.com/watch?v=BC4Ku0pZbDk'},
    {name: 'Soundcloud', url: 'https://soundcloud.com/risky4real/feast'},
    {name: 'Bandcamp', url: 'https://risky4real.bandcamp.com/track/feast'},
    {name: 'Genius', url: 'https://genius.com/Risky4real-feast-lyrics'},
  ];
}
