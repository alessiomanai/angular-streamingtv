import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActualChannelService {

  actualChannel : Channel;

  constructor() {
    
  }

   getChannel(){

    return this.actualChannel;
   }

   setChannel(channel: Channel){
     this.actualChannel;
   }
}
