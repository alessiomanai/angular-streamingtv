import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as data from './../../channels.json';


@Injectable({
  providedIn: 'root'
})
export class ChannelService {

  private channels : any = (data as any).default;

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
