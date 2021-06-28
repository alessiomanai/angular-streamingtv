import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Channel } from '../model/channel.interface';
import * as data from './../../channels.json';


@Injectable({
  providedIn: 'root'
})
export class ChannelService {

  private channels : Array<Channel> = (data as any).default;

  constructor(private router: Router) {
    
  }

  selectChannel(url : string){
    this.router.navigate(['/watch', url]);
    
  }

  getChannel(i: number){
    return this.channels[i].url;
  }

  getChannelsList(): Array<Channel> {
    return this.channels;
  }

}
