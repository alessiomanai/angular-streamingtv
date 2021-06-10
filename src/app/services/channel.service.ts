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
    },
    {
      name: "TV8",
      url: "https://www.mytivu.it/Application/Channels/TV8.php",
      photo: null
    },
    {
      name: "Top Crime",
      url: "https://live3-mediaset-it.akamaized.net/Content/hls_h0_clr_vos/live/channel(lt)/index.m3u8",
      photo: null
    },
    {
      name: "Giallo",
      url: "https://sbshdlu5-lh.akamaihd.net/i/sbshdl_2@810996/master.m3u8?hdnts=st=1564227924~exp=1564314324~acl=/*~hmac=98bf7f8b6e1d65254efde4c3350f77d0e01d778d5e86abffd3ff244df230faad&mux_audio=true",
      photo: null
    },
    {
      name: "Motor Trend",
      url: "https://sbshdlu5-lh.akamaihd.net/i/sbshdl_1@810993/master.m3u8?hdnts=st=1559845194~exp=1559931594~acl=/*~hmac=877e074ac091df4a9d3406b63474da090678d4eef65c21489d443b94d4de7087&mux_audio=true",
      photo: null
    },
    {
      name: "Dmax",
      url: "https://sbshdlu5-lh.akamaihd.net/i/sbshdl_5@825063/master.m3u8",
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
