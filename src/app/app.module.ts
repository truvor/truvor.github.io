import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { LinkListComponent } from './link-list/link-list.component';
import { AppRoutingModule } from './app-routing.module';
import { TrinityComponent } from './trinity/trinity.component';
import { MixtapeComponent } from './mixtape/mixtape.component';
import { MemosComponent } from './memos/memos.component';
import { CanalComponent } from './canal/canal.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    LinkListComponent,
    TrinityComponent,
    MixtapeComponent,
    MemosComponent,
    CanalComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
