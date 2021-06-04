import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ChannelService {

  private channels : Array<any> = [
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
    },
    {
      name: "Mediaset Extra",
      url: "https://live3-mediaset-it.akamaized.net/Content/hls_h0_clr_vos/live/channel(kq)/index.m3u8",
      photo: null
    },
    {
      name: "20",
      url: "https://live3-mediaset-it.akamaized.net/Content/hls_h0_clr_vos/live/channel(lb)/index.m3u8",
      photo: null
    },
    {
      name: "Italia 2",
      url: "https://live3-mediaset-it.akamaized.net/Content/hls_h0_clr_vos/live/channel(I2)/index.m3u8",
      photo: null
    }
  ];

  constructor(private router: Router) {
    
  }

  selectChannel(index : number){
    this.router.navigate(['/watch', index]);
    
  }

  getChannel(i: number){
    return this.channels[i].url;
  }

  getChannelsList() {
    return this.channels;
  }
}
