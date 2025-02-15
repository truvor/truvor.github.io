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
    {name: 'Bandcamp', url: 'https://risky4real.bandcamp.com/track/feast'},
    {name: 'Pandora', url: 'https://www.pandora.com/artist/credits/risky4real/feast/feast/TR49Z3z7jqkp69K'},
    {name: 'Soundcloud', url: 'https://soundcloud.com/risky4real/feast'},
    {name: 'VK Music', url: 'https://vk.com/audio-2001322781_134322781'},
    {name: 'Yandex Music', url: 'https://music.yandex.ru/album/35394086/track/136107499'},
    {name: 'Genius', url: 'https://genius.com/Risky4real-feast-lyrics'},
  ];
}
