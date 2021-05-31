import { Component, OnInit } from '@angular/core';
import { ActualChannelService } from '../services/actual-channel.service';

@Component({
  selector: 'channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.css']
})
export class ChannelsComponent implements OnInit {

  channels : Array<any> = [
    {
      name: "Canale 5",
      url: "https://live3-mediaset-it.akamaized.net/Content/hls_h0_clr_vos/live/channel(c5)/index.m3u8",
      photo: null
    },
    {
      name: "Italia 1",
      url: "https://live3-mediaset-it.akamaized.net/Content/hls_h0_clr_vos/live/channel(i1)/index.m3u8",
      photo: null
    },
    {
      name: "Rete 4",
      url: "https://live3-mediaset-it.akamaized.net/Content/hls_h0_clr_vos/live/channel(r4)/index.m3u8",
      photo: null
    }
  ];

  constructor(private actualChannel: ActualChannelService) { }

  ngOnInit(): void {

    

  }

  selectChannel($event){

    console.log($event);

    this.actualChannel.channel = $event;

  }

}
