import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'risky-landing';
  linksList = [
    {name: 'Spotify', url: 'https://open.spotify.com/album/3e0WoCXPhUWgx7Uwxw6AKo'},
    {name: 'Apple Music', url: 'https://music.apple.com/us/album/trinity-single/1570768047'},
    {name: 'Yandex Music', url: 'https://music.yandex.ru/album/16025760'},
    {name: 'Pandora', url: 'https://pandora.app.link/PGCogOktfhb'},
    {name: 'Deezer', url: 'https://deezer.page.link/AaKTRi4rpWxSdnuc8'},
    {name: 'Youtube Music', url: 'https://music.youtube.com/playlist?list=OLAK5uy_lPgs04Fb2GiYD2bzft4CdjCorWkoEAYgA&feature=share'},
    {name: 'Vkontakte', url: 'https://vk.com/music/album/-2000776812_11776812_a2932fc3ea2827674c'},
    {name: 'Soundcloud', url: 'https://soundcloud.com/risky4real/sets/trinity'},
    {name: 'Bandcamp', url: 'https://risk4real.bandcamp.com/album/trinity'},
    {name: 'Lyrics on Genius', url: 'https://genius.com/albums/Risky4real/Trinity'},
  ];
}
