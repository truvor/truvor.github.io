import { Routes } from "@angular/router";
import { TrinityComponent } from "./trinity/trinity.component";
import { MixtapeComponent } from "./mixtape/mixtape.component";
import { CanalComponent } from "./canal/canal.component";
import { AlbumComponent } from "./album/album.component";

export const routes: Routes = [
  { path: "wooden-city", component: AlbumComponent },
  { path: "canal", component: CanalComponent },
  { path: "trinity", component: TrinityComponent },
  { path: "mixtape", component: MixtapeComponent },
  { path: "", redirectTo: "/wooden-city", pathMatch: "full" },
];
