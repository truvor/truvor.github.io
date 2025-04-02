import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrinityComponent } from './trinity/trinity.component';
import { MixtapeComponent } from './mixtape/mixtape.component';
import { MemosComponent } from './memos/memos.component';
import { CanalComponent } from './canal/canal.component';
import { AlbumComponent } from './album/album.component';


const routes: Routes = [
  {path: 'wooden-city', component: AlbumComponent},
  {path: 'canal', component: CanalComponent},
  {path: 'trinity', component: TrinityComponent},
  {path: 'mixtape', component: MixtapeComponent},
  {path: 'memos', component: MemosComponent},
  {path: '', redirectTo: '/wooden-city', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
