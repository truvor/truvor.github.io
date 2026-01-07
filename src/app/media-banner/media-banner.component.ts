import { Component } from "@angular/core";
import { NgOptimizedImage } from "@angular/common";
import "../app.component.css";
import { umamiAttr } from "../lib/umami";

@Component({
  selector: "media-banner",
  imports: [NgOptimizedImage],
  templateUrl: "./media-banner.component.html",
  styleUrl: "./media-banner.component.css",
})
export class MediaBannerComponent {
  protected readonly umamiAttr = umamiAttr;
}
