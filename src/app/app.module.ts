import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { AppRoutingModule } from './app-routing.module';
import { TrinityComponent } from './trinity/trinity.component';
import { MixtapeComponent } from './mixtape/mixtape.component';
import { MemosComponent } from './memos/memos.component';
import { CanalComponent } from './canal/canal.component';
import { AlbumComponent } from './album/album.component';
import { MediaBannerComponent } from './media-banner/media-banner.component';
import {CardComponent} from "./card/card.component";
import {NgOptimizedImage} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    TrinityComponent,
    MixtapeComponent,
    MemosComponent,
    CanalComponent,
    AlbumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MediaBannerComponent,
    CardComponent,
    ItemComponent,
    NgOptimizedImage
  ],
  providers: [],
  exports: [
    CardComponent,
    ItemComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
