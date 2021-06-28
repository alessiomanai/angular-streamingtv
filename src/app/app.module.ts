import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WatchComponent } from './view/watch/watch.component';
import { ChannelsComponent } from './view/channels/channels.component';
import { ChannelBottonComponent } from './view/channel-botton/channel-botton.component';
import { ChannelService } from './services/channel.service';
import { SearchComponent } from './view/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    WatchComponent,
    ChannelsComponent,
    ChannelBottonComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    ChannelService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
