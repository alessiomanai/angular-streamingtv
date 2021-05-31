import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActualChannelService {

  actualChannel : any;

  constructor() {
    
  }

   get channel(){
    return this.actualChannel;
   }

   set channel(channel: any){
     this.actualChannel;
   }
}
