import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WatchComponent } from './view/watch/watch.component';
import { ChannelsComponent } from './channels/channels.component';
import { ChannelBottonComponent } from './view/channel-botton/channel-botton.component';
import { ActualChannelService } from './services/actual-channel.service';

@NgModule({
  declarations: [
    AppComponent,
    WatchComponent,
    ChannelsComponent,
    ChannelBottonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    ActualChannelService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
