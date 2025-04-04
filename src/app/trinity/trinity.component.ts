import { Component } from '@angular/core';

@Component({
    selector: 'app-trinity',
    templateUrl: './trinity.component.html',
    styleUrls: ['./trinity.component.css'],
    standalone: false
})
export class TrinityComponent {
  linksList = [
    {name: 'Spotify', url: 'https://open.spotify.com/album/3e0WoCXPhUWgx7Uwxw6AKo'},
    {name: 'Apple', url: 'https://music.apple.com/us/album/trinity-single/1570768047'},
    {name: 'Pandora', url: 'https://pandora.app.link/PGCogOktfhb'},
    {name: 'Deezer', url: 'https://deezer.page.link/AaKTRi4rpWxSdnuc8'},
    {name: 'Youtube', url: 'https://music.youtube.com/playlist?list=OLAK5uy_lPgs04Fb2GiYD2bzft4CdjCorWkoEAYgA&feature=share'},
    {name: 'Soundcloud', url: 'https://soundcloud.com/risky4real/sets/trinity'},
    {name: 'Bandcamp', url: 'https://risky4real.bandcamp.com/album/trinity'},
    {name: 'Lyrics', url: 'https://genius.com/albums/Risky4real/Trinity'},
  ];
}
