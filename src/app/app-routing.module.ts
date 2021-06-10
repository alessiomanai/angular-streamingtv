import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChannelsComponent } from './view/channels/channels.component';
import { WatchComponent } from './view/watch/watch.component';

const routes: Routes = [
  { path: '', redirectTo: '/channels', pathMatch: 'full' },
  { path: 'channels', component: ChannelsComponent },
  { path: 'watch/:ch', component: WatchComponent , data: {ch : 0}},
  { path: '**', redirectTo: '/channels'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
