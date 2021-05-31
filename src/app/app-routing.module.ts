import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChannelsComponent } from './channels/channels.component';
import { WatchComponent } from './view/watch/watch.component';

const routes: Routes = [
  { path: '', redirectTo: '/channels', pathMatch: 'full' },
  { path: 'channels', component: ChannelsComponent },
  { path: 'watch', component: WatchComponent },
  { path: '**', redirectTo: '/channels'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
