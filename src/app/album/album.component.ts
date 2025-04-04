import { Component } from '@angular/core';

@Component({
    selector: 'app-album',
    templateUrl: './album.component.html',
    styleUrls: ['./album.component.css'],
    standalone: false
})
export class AlbumComponent {
  linksList = [
    {name: 'Spotify', url: 'https://open.spotify.com/album/0FT3N9Ys1N6DSoPJCTQx5V?si=Nm2UfOvxSRuBRdSTwp7PYw'},
    {name: 'Apple', url: 'https://music.apple.com/us/album/wooden-city/1802287086'},
    {name: 'YT.Music', url: 'https://music.youtube.com/playlist?list=OLAK5uy_ldzGY2XFEjsYPKfKhooZPp-n2SimIbuZs&si=QX2cygX-JNfV2us-'},
    {name: 'Deezer', url: 'https://www.deezer.com/us/album/727716431'},
    {name: 'Soundcloud', url: 'https://soundcloud.com/risky4real/sets/wooden-city'},
    {name: 'Bandcamp', url: 'https://risky4real.bandcamp.com/album/wooden-city'},
    {name: 'Amazon', url: 'https://music.amazon.com/albums/B0F1H12MK7'},
    {name: 'Pandora', url: 'https://www.pandora.com/artist/risky4real/wooden-city/ALd57bkfPhgqX6q'},
    {name: 'Yandex', url: 'https://music.yandex.ru/album/36174603'},
    {name: 'VK', url: 'https://vk.com/music/album/-2000786716_23786716_bc819beb09f87f9da3'},
    {name: 'Zvuk', url: 'https://zvuk.com/release/38234917'},
    {name: 'Lyrics', url: 'https://genius.com/albums/Risky4real/Wooden-city'},
    {name: 'Ru Lyrics', url: 'https://genius.com/albums/Genius-russian-translations/Risky4real-wooden-city'},
    {name: 'Party Sign-up', url: 'https://www.bandsintown.com/e/106655421-risky4real-at-peace-cafe'},
  ];
}
