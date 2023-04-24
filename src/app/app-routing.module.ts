import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrinityComponent } from './trinity/trinity.component';
import { MixtapeComponent } from './mixtape/mixtape.component';


const routes: Routes = [
  {path: 'trinity', component: TrinityComponent},
  {path: 'mixtape', component: MixtapeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
