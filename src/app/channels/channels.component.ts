import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.css']
})
export class ChannelsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    let channels : Array<any>;

    let channel : Channel;
    channel.name = "Canale 5";
    channel.url = "https://live3-mediaset-it.akamaized.net/Content/hls_h0_clr_vos/live/channel(c5)/index.m3u8";

    channels.push(channel);
  }

}
