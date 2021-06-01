import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActualChannelService {

  actualChannel : any;
  selected : number = 0;

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

  constructor() {
    
  }

  selectChannel(index : number){
    this.selected = index;
  }

  getChannel(){
    return this.channels[this.selected].url;
  }

  getChannelsList() {
    return this.channels;
  }
}
