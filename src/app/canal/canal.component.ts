import { Component } from '@angular/core';

@Component({
  selector: 'app-canal',
  templateUrl: './canal.component.html',
  styleUrls: ['./canal.component.css']
})
export class CanalComponent {
  linksList = [
    {name: 'Spotify', url: 'https://open.spotify.com/album/26BREYf7zPprUtaZ26DaIQ?si=Dbka2680RKy4qUrsGr6LMA'},
    {name: 'Apple', url: 'https://music.apple.com/ae/album/canal-street-single/1714121555'},
    {name: 'Pandora', url: 'https://www.pandora.com/artist/risky4real/canal-street/canal-street/TRb3vZVKlJ6xxjP?part=ug-desktop&corr=1102229149'},
    {name: 'Deezer', url: 'https://deezer.page.link/NDRJFgTtAsLErP9RA'},
    {name: 'YT.Music', url: 'https://music.youtube.com/playlist?list=OLAK5uy_l-qEwJSyfbmotQ_HmfNOHySL8vQjUx8vI'},
    {name: 'Bandcamp', url: 'https://risky4real.bandcamp.com/track/canal-street'},
    {name: 'Soundcloud', url: 'https://soundcloud.com/risky4real/canal-street'},
    {name: 'Genius', url: 'https://genius.com/Risky4real-canal-street-lyrics'},
  ];
}
