import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import '../app.component.css';

@Component({
  selector: 'media-banner',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './media-banner.component.html',
  standalone: true,
  styleUrl: './media-banner.component.css'
})
export class MediaBannerComponent {

}
