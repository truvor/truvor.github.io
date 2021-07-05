import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LinkListComponent } from './link-list/link-list.component';

const routes: Routes = [
  {path: 'link-list-item', component: LinkListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
